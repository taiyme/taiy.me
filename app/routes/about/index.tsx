import LinkText from '@/components/LinkText';
import PageGrid from '@/components/PageGrid';
import { PageHeading } from '@/components/PageHeading';
import AboutCard from '@/features/AboutCard';
import type { Metadata } from '@/types/metadata';

export const metadata = {
  path: '/about',
  title: 'taiyについて',
  description: '音声作品と音ゲー、たまにプログラミング。',
} as const satisfies Metadata;

export default function Page() {
  return (
    <article class='space-y-8'>
      <header class='space-y-3'>
        <PageHeading level={1} isPageTitle>taiyについて</PageHeading>
        <p class='leading-relaxed'>音声作品と音ゲー、たまにプログラミング。</p>
        <p class='leading-relaxed'>taiyの正式な発音は「たいいー」です。<LinkText to='/specials/statement' aria-label='taiyの発音に関する公式声明を見る'>詳細はこちら</LinkText></p>
      </header>
      <section class='space-y-3'>
        <PageHeading level={2}>このサイトについて</PageHeading>
        <p class='leading-relaxed'>taiy.meというドメインは2020年に取得していましたが、2024年になってようやくこのサイトを爆誕させることになりました。</p>
        <p class='leading-relaxed'>HonoX + Tailwind CSS製です。TypeScriptとESLintを導入しています。</p>
      </section>
      <section class='space-y-3'>
        <PageHeading level={2}>音ゲーについて</PageHeading>
        <p class='leading-relaxed'>最近は<LinkText href='https://wds-stellarium.com/game/' external>ユメステ</LinkText>をプレイしています。2024年7月頃にプレイヤーレート1000を達成しました。</p>
        <aside>
          <h3 class='sr-only'>余談</h3>
          <p class='leading-relaxed'>とりあえず『<LinkText href='https://www.youtube.com/watch?v=BVdrMRaxcdU' external>不可逆的運命ディストピア</LinkText>』と『<LinkText href='https://www.youtube.com/watch?v=e_N_24PrPTU' external>I Wanna</LinkText>』は神曲なので聴いてやってください。</p>
        </aside>
      </section>
      <section class='space-y-3'>
        <PageHeading level={2}>音声作品について</PageHeading>
        <p class='leading-relaxed'>人並みに音声作品を嗜んでおります。<LinkText to='/specials/asmr' aria-label='taiyがひたすら音声作品を紹介するページを見る'>ここでは多くは語りませんが</LinkText>、純愛が良いと思います。</p>
      </section>
      <section class='space-y-3'>
        <PageHeading level={2}>作ったもの</PageHeading>
        <PageGrid>
          <AboutCard
            label={(
              <>
                <h3 class='inline font-bold'>taiy.me</h3>
                <span class='text-sm'><LinkText href='https://github.com/taiyme/taiy.me' external>ソースコード</LinkText></span>
              </>
            )}
            description={(
              <p>このサイトです。</p>
            )}
          />
          <AboutCard
            label={(
              <>
                <h3 class='inline font-bold'>u.taiy.me</h3>
                <span class='text-sm'><LinkText href='https://github.com/taiyme/u.taiy.me' external>ソースコード</LinkText></span>
              </>
            )}
            description={(
              <>
                <p>taiy専用URL短縮サービスです。</p>
                <p>Hono + Cloudflare Workers製です。</p>
              </>
            )}
          />
          <AboutCard
            label={(
              <>
                <h3 class='inline font-bold'>@taiyme/eslint-config</h3>
                <span class='text-sm'><LinkText href='https://github.com/taiyme/eslint-config' external>ソースコード</LinkText></span>
              </>
            )}
            description={(
              <>
                <p>taiyのためのESLint共有設定です。</p>
                <p><LinkText href='https://www.npmjs.com/package/@taiyme/eslint-config' external>npmで配布</LinkText>しています。</p>
              </>
            )}
          />
          <AboutCard
            label={(
              <>
                <h3 class='inline font-bold'>taiyme/misskey</h3>
                <span class='text-sm'><LinkText href='https://github.com/taiyme/misskey' external>ソースコード</LinkText></span>
              </>
            )}
            description={(
              <>
                <p>taiyの思うままに改造している、Misskeyの派生ソフトウェアです。</p>
                <p>公開サーバーの<LinkText href='https://submarin.online/' external>Submarin</LinkText>で採用されています。</p>
              </>
            )}
          />
        </PageGrid>
      </section>
    </article>
  );
}
