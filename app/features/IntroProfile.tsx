import { useRequestContext } from 'hono/jsx-renderer';

import IconBrandGithubFilled from '@/components/IconBrandGithubFilled';
import IconBrandMisskeyFilled from '@/components/IconBrandMisskeyFilled';
import IconHeartHandshake from '@/components/IconHeartHandshake';
import LinkButton from '@/components/LinkButton';
import LinkIcon from '@/components/LinkIcon';
import LinkText from '@/components/LinkText';
import { SITE_COPYRIGHT } from '@/constants/site';

type Props = Readonly<{
  semantics?: boolean;
}>;

export default function IntroProfile({ semantics }: Props) {
  const c = useRequestContext();
  const currentPath = c.req.path;

  const XHeadingGroup = semantics ? 'hgroup' : 'div';
  const XHeading = semantics ? 'h1' : 'div';
  const XParagraph = semantics ? 'p' : 'div';
  const XFooter = semantics ? 'footer' : 'div';

  return (
    <div
      class='@container grid w-full place-items-center gap-6 pb-[10dvh]'
    >
      <div
        class={`
          aspect-square size-48 overflow-clip rounded-full shadow-xl select-none
          [view-transition-name:layout-avatar]
          @md:size-56
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
      <XHeadingGroup
        class='row-span-2 grid w-full grid-rows-subgrid gap-3'
      >
        <XHeading
          class={`
            text-center text-2xl/none font-bold
            @md:text-3xl/none
          `}
        >
          <span translate='no'>taiy</span>
        </XHeading>
        <XParagraph
          class={`
            text-center text-base/none text-gray-500
            @md:text-lg/none
          `}
        >
          <span translate='no'>a.k.a. taiyme</span>
        </XParagraph>
      </XHeadingGroup>
      <div class='-my-1 grid grid-flow-col gap-2'>
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
      <XFooter class='row-span-2 grid w-full grid-rows-subgrid'>
        <div class='-my-1 text-center'>
          <LinkButton
            to='/about'
            author
          >
            プロフィールを見る
          </LinkButton>
        </div>
        <div class='space-y-1'>
          {currentPath !== '/' && (
            <p class='text-center text-sm/tight'>
              <LinkText
                to='/'
                variant='secondary'
              >
                トップページ
              </LinkText>
            </p>
          )}
          <p class='text-center text-sm/tight'>
            <LinkText
              to='/privacy'
              variant='secondary'
              privacyPolicy
            >
              プライバシーポリシー
            </LinkText>
          </p>
          <p class='text-center text-sm/tight text-gray-500'>
            <span translate='no'>{SITE_COPYRIGHT}</span>
          </p>
        </div>
      </XFooter>
    </div>
  );
}
