import { useRequestContext } from 'hono/jsx-renderer';

import IconBrandGithubFilled from '@/components/IconBrandGithubFilled';
import IconBrandMisskeyFilled from '@/components/IconBrandMisskeyFilled';
import IconHeartHandshake from '@/components/IconHeartHandshake';
import LinkButton from '@/components/LinkButton';
import LinkIcon from '@/components/LinkIcon';
import LinkText from '@/components/LinkText';
import { SITE_COPYRIGHT } from '@/constants/site';

export default function Profile() {
  const c = useRequestContext();
  const currentPath = c.req.path;

  const isSemantics = currentPath === '/';

  const XHeadingGroup = isSemantics ? 'hgroup' : 'div';
  const XHeading = isSemantics ? 'h1' : 'div';
  const XParagraph = isSemantics ? 'p' : 'div';
  const XFooter = isSemantics ? 'footer' : 'div';

  return (
    <div class='@container/profile grid w-full place-items-center gap-6'>
      <div
        class={`
          aspect-square size-48 overflow-clip rounded-full shadow-xl select-none
          [view-transition-name:profile-avatar]
          @md/profile:size-56
        `}
      >
        <picture>
          <img
            src='/images/avatars/taiy_512.png'
            alt='taiyのアイコン'
            loading='eager'
            class='pointer-events-none size-full select-none'
          />
        </picture>
      </div>
      <XHeadingGroup class='row-span-2 grid w-full grid-rows-subgrid gap-1 text-center'>
        <XHeading
          class={`
            text-2xl font-bold
            @md/profile:text-3xl
          `}
        >
          taiy
        </XHeading>
        <XParagraph
          class={`
            text-gray-500
            @md/profile:text-lg
          `}
        >
          a.k.a. taiyme
        </XParagraph>
      </XHeadingGroup>
      <div class='-my-2 grid grid-flow-col gap-2'>
        <LinkIcon
          href='https://u.taiy.me/fedi'
          external
          icon={IconBrandMisskeyFilled}
          aria-label='taiyのMisskeyを見る'
        />
        <LinkIcon
          href='https://github.com/taiyme'
          external
          me
          icon={IconBrandGithubFilled}
          aria-label='taiyのGitHubを見る'
        />
        <LinkIcon
          to='/specials/donate'
          icon={IconHeartHandshake}
          aria-label='taiyを支援する'
        />
      </div>
      <XFooter class='row-span-2 grid w-full grid-rows-subgrid gap-4 text-center'>
        <div class='text-center'>
          <LinkButton
            to='/about'
            author
          >
            プロフィールを見る
          </LinkButton>
        </div>
        <div class='space-y-1'>
          {currentPath !== '/' && (
            <p class='text-center text-sm leading-tight'>
              <LinkText
                to='/'
                secondary
              >
                トップページ
              </LinkText>
            </p>
          )}
          <p class='text-center text-sm leading-tight'>
            <LinkText
              to='/privacy'
              secondary
              privacyPolicy
            >
              プライバシーポリシー
            </LinkText>
          </p>
          <p class='text-center text-sm leading-tight'>
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
      </XFooter>
    </div>
  );
}
