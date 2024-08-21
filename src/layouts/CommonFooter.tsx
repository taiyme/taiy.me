import { Link } from 'next-view-transitions';

import { defaultAvatar } from '@/constants/avatarList';
import { copyright } from '@/constants/copyright';
import { clsx } from '@/utils/clsx';

export default function CommonFooter() {
  return (
    <footer
      className={clsx(`
        overflow-clip
        px-4 pb-[max(5dvh,1.5rem)] pt-6
        @5xl/layout:hidden
      `)}
    >
      <div
        className={clsx(`
          grid grid-cols-[1fr_auto_1fr] items-center
          @container/footer
        `)}
      >
        <div className='justify-self-end'>
          <Link
            href='/'
            className={clsx(`
              -mx-2.5
              flex items-center gap-2
              rounded-full
              px-2.5 py-1.5
              text-sm
              outline-none outline-0
              transition-colors
              hover:bg-black/5
              focus-visible:!bg-transparent focus-visible:outline-2 focus-visible:ring-2
              active:bg-black/5
            `)}
          >
            <div
              className={clsx(`
                aspect-square
                size-8
                select-none
                overflow-clip
                rounded-full
                opacity-90
                shadow-md
              `)}
            >
              <picture>
                <img
                  src={defaultAvatar}
                  alt='taiyのアイコン'
                  width={32}
                  height={32}
                  loading='lazy'
                  className='pointer-events-none size-full select-none'
                />
              </picture>
            </div>
            <div className='text-lg font-bold opacity-90'>taiy.me</div>
          </Link>
        </div>
        <div
          aria-hidden='true'
          className={clsx(`
            h-full px-4
            before:block
            before:size-full
            before:border-r
          `)}
        />
        <div className='justify-self-start'>
          <div className='space-y-1'>
            <p className='leading-none'>
              <Link
                href='/privacy'
                rel='privacy-policy'
                className={clsx(`
                  rounded-[2px]
                  text-sm
                  text-gray-500
                  outline-none outline-0
                  hover:underline
                  focus-visible:!no-underline focus-visible:outline-2 focus-visible:ring-2
                  active:underline
                `)}
              >
                プライバシーポリシー
              </Link>
            </p>
            <p className='leading-none'>
              <small className='text-sm text-gray-500'>
                {copyright}
              </small>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
