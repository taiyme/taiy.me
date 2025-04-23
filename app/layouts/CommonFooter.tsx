import LinkText from '@/components/LinkText';
import { SITE_COPYRIGHT } from '@/constants/site';

export default function CommonFooter() {
  return (
    <footer
      class={`
        overflow-clip px-4 pt-6 pb-[max(5dvh,1.5rem)]
        @5xl/layout:hidden
      `}
    >
      <div class='@container/footer grid grid-cols-[1fr_auto_1fr] items-center'>
        <div class='justify-self-end'>
          <a
            href='/'
            class={`
              -mx-2.5 grid grid-flow-col place-items-center gap-2 rounded-full px-2.5 py-1.5 text-sm
              focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:outline-hidden
              motion-safe:transition-colors
              hover-active-without-focus:bg-black/5
            `}
          >
            <div class='aspect-square size-8 overflow-clip rounded-full opacity-90 shadow-md select-none'>
              <picture>
                <img
                  src='/images/avatars/taiy_64.png'
                  alt='taiyのアイコン'
                  loading='lazy'
                  class='pointer-events-none size-full select-none'
                />
              </picture>
            </div>
            <div class='text-lg font-bold opacity-90'>taiy.me</div>
          </a>
        </div>
        <div
          aria-hidden='true'
          class={`
            h-full px-4
            before:block before:size-full before:border-r before:border-r-gray-200
          `}
        />
        <div class='justify-self-start'>
          <div class='space-y-1'>
            <p class='text-sm leading-tight'>
              <LinkText
                to='/privacy'
                secondary
                privacyPolicy
              >
                プライバシーポリシー
              </LinkText>
            </p>
            <p class='text-sm leading-tight'>
              <small
                class={`
                  text-[length:inherit]
                  text-gray-500
                `}
              >
                {SITE_COPYRIGHT}
              </small>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
