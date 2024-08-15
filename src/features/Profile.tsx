import { IconBrandGithubFilled, IconPigMoney, IconWorld } from '@tabler/icons-react';
import { Link } from 'next-view-transitions';

import LinkButton from '@/components/LinkButton';
import LinkIcon from '@/components/LinkIcon';
import { copyright } from '@/constants/copyright';
import ProfileAvatar from '@/features/ProfileAvatar';
import ProfileComment from '@/features/ProfileComment';
import { clsx } from '@/utils/clsx';

type ProfileProps = Readonly<{
  inIndexPage?: boolean;
}>;

export default function Profile({ inIndexPage = false }: ProfileProps) {
  const DivOrFooter = inIndexPage ? 'footer' : 'div';

  return (
    <div className='flex w-full flex-col items-center gap-6 @container/profile'>
      <ProfileAvatar />
      <div className='flex flex-col items-center gap-1'>
        <h1 className='text-2xl font-bold @md/profile:text-3xl'>taiy</h1>
        <ProfileComment />
      </div>
      <div className='-my-2 flex gap-2'>
        <LinkIcon
          me
          href='https://u.taiy.me/fedi'
          icon={IconWorld}
          aria-label='taiyのFediverseを見る'
        />
        <LinkIcon
          me
          href='https://github.com/taiyme'
          icon={IconBrandGithubFilled}
          aria-label='taiyのGitHubを見る'
        />
        <LinkIcon
          href='/specials/donate'
          icon={IconPigMoney}
          aria-label='taiyを支援する'
        />
      </div>
      <DivOrFooter className='flex flex-col gap-4'>
        <div className='text-center'>
          <LinkButton author href='/about'>プロフィールを見る</LinkButton>
        </div>
        <div className='space-y-1'>
          {!inIndexPage && (
            <p className='text-center leading-none'>
              <Link
                href='/'
                className={clsx(`
                  rounded-[2px]
                  text-sm
                  text-gray-500
                  outline-none
                  hover:underline
                  focus-visible:!no-underline focus-visible:ring-2
                  active:underline
                `)}
              >
                トップページ
              </Link>
            </p>
          )}
          <p className='text-center leading-none'>
            <Link
              href='/privacy'
              rel='privacy-policy'
              className={clsx(`
                rounded-[2px]
                text-sm
                text-gray-500
                outline-none
                hover:underline
                focus-visible:!no-underline focus-visible:ring-2
                active:underline
              `)}
            >
              プライバシーポリシー
            </Link>
          </p>
          <p className='text-center leading-none'>
            <small className='text-sm text-gray-500'>
              {copyright}
            </small>
          </p>
        </div>
      </DivOrFooter>
    </div>
  );
}
