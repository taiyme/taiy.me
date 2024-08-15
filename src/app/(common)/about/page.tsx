import type { Metadata } from 'next';

import LinkText from '@/components/LinkText';
import { generateStaticMetadata } from '@/utils/generateStaticMetadata';

export const metadata = {
  ...generateStaticMetadata({
    title: 'taiyについて',
    description: '音声作品と音ゲー、たまにプログラミング。',
    path: '/about',
  }),
} as const satisfies Metadata;

export default function AboutPage() {
  return (
    <article className='flex flex-col gap-8'>
      <header className='space-y-3'>
        <h1 className='mb-4 text-2xl font-bold @xl/page:text-3xl'>taiyについて</h1>
        <p className='leading-relaxed'>音声作品と音ゲー、たまにプログラミング。</p>
        <p className='leading-relaxed'>taiyの正式な発音は「たいいー」です。<LinkText href='/specials/statement' aria-label='taiyの発音に関する公式声明を見る'>詳細はこちら</LinkText></p>
      </header>
      <section className='space-y-3'>
        <h2 className='text-lg font-bold @xl/page:text-xl'>このサイトについて</h2>
        <p className='leading-relaxed'>taiy.meというドメインは2020年に取得していましたが、2024年になってようやくこのサイトを爆誕させることになりました。</p>
        <p className='leading-relaxed'>Next.js (App Router) + Tailwind CSS製です。TypeScriptとESLint (Flat Config)を導入しています。</p>
      </section>
      <section className='space-y-3'>
        <h2 className='text-lg font-bold @xl/page:text-xl'>音ゲーについて</h2>
        <p className='leading-relaxed'>最近は<LinkText href='https://wds-stellarium.com/game/'>ユメステ</LinkText>をプレイしています。2024年7月頃にプレイヤーレート1000を達成しました。</p>
        <aside>
          <h3 className='sr-only'>余談</h3>
          <p className='leading-relaxed'>とりあえず『<LinkText href='https://www.youtube.com/watch?v=BVdrMRaxcdU'>不可逆的運命ディストピア</LinkText>』と『<LinkText href='https://www.youtube.com/watch?v=e_N_24PrPTU'>I Wanna</LinkText>』は神曲なので聴いてやってください。</p>
        </aside>
      </section>
      <section className='space-y-3'>
        <h2 className='text-lg font-bold @xl/page:text-xl'>音声作品について</h2>
        <p className='leading-relaxed'>人並みに音声作品を嗜んでおります。<LinkText href='/specials/asmr' aria-label='taiyがひたすら音声作品を紹介するページを見る'>ここでは多くは語りませんが</LinkText>、純愛が良いと思います。</p>
      </section>
      <section className='space-y-3'>
        <h2 className='text-lg font-bold @xl/page:text-xl'>作ったもの</h2>
        <ul className='list-disc space-y-2 pl-8'>
          <li>
            <p className='leading-relaxed'><span className='font-bold'>taiy.me</span> <LinkText href='https://github.com/taiyme/taiy.me'>ソースコード</LinkText></p>
            <p className='leading-relaxed'>このサイトです。</p>
          </li>
          <li>
            <p className='leading-relaxed'><span className='font-bold'>u.taiy.me</span> <LinkText href='https://github.com/taiyme/u.taiy.me'>ソースコード</LinkText></p>
            <p className='leading-relaxed'>taiy専用URL短縮サービスです。</p>
            <p className='leading-relaxed'>Hono + Cloudflare Workers製です。</p>
          </li>
          <li>
            <p className='leading-relaxed'><span className='font-bold'>taiyme/misskey</span> <LinkText href='https://github.com/taiyme/misskey'>ソースコード</LinkText></p>
            <p className='leading-relaxed'>taiyの思うままに改造している、Misskeyの派生ソフトウェアです。</p>
            <p className='leading-relaxed'>公開サーバーの<LinkText href='https://submarin.online/'>Submarin</LinkText>で採用されています。</p>
          </li>
        </ul>
      </section>
    </article>
  );
}
