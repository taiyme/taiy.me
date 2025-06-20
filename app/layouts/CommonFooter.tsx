import LinkText from '@/components/LinkText';
import { SITE_COPYRIGHT } from '@/constants/site';

export default function CommonFooter() {
  return (
    <div
      class={`
        @container grid size-full grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] place-items-center px-4
        pt-[calc(max(5dvh,1.5rem)/2)] pb-[max(5dvh,1.5rem)]
      `}
    >
      <div class='justify-self-end'>
        <a
          href='/'
          class={`
            -mx-2.5 grid grid-flow-col place-items-center gap-1.5 rounded-full px-2.5 py-1.5 u-focus-ring
            motion-safe:transition-colors
            @sm:gap-2
            hover-active-without-focus:bg-black/5
          `}
        >
          <div
            class={`
              aspect-square size-7 overflow-clip rounded-full opacity-90 shadow-md select-none
              @sm:size-8
            `}
          >
            <picture>
              <img
                src='/images/avatars/taiy_64.png'
                alt='taiyのアイコン'
                loading='lazy'
                class='pointer-events-none size-full select-none'
              />
            </picture>
          </div>
          <div
            class={`
              text-base/none font-bold opacity-90
              @sm:text-lg/none
            `}
          >
            <span translate='no'>taiy.me</span>
          </div>
        </a>
      </div>
      <div
        aria-hidden='true'
        class='mx-4 h-full border-r border-r-gray-200'
      />
      <div class='justify-self-start'>
        <div
          class={`
            space-y-0.5
            @sm:space-y-1
          `}
        >
          <p
            class={`
              text-xs/tight
              @sm:text-sm/tight
            `}
          >
            <LinkText
              to='/privacy'
              variant='secondary'
              privacyPolicy
            >
              プライバシーポリシー
            </LinkText>
          </p>
          <p
            class={`
              text-xs/tight text-gray-500
              @sm:text-sm/tight
            `}
          >
            <span translate='no'>{SITE_COPYRIGHT}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
