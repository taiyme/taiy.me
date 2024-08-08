import type { Metadata } from 'next';

import LinkText from '@/components/LinkText';
import { generateStaticMetadata } from '@/utils/generateStaticMetadata';

export const metadata = {
  ...generateStaticMetadata({
    title: 'Misskeyの利用マナー',
    description: 'Misskeyの利用マナーを掲載しています。',
    path: '/specials/manners',
  }),
} as const satisfies Metadata;

export default function SpecialsMannersPage() {
  return (
    <article className='flex flex-col gap-8'>
      <header className='space-y-3'>
        <h1 className='mb-4 text-2xl font-bold @xl/page:text-3xl'>Misskeyの利用マナー</h1>
        <p className='leading-relaxed'>随時更新します。</p>
        <p className='leading-relaxed'>この利用マナーは個人の意見に基づくものであり、実際には各サーバーの利用規約等が優先されます。</p>
        <p className='italic leading-relaxed'>免責: この利用マナーに基づいた投稿について、著者は一切責任を負いません。</p>
      </header>
      <section className='space-y-3'>
        <h2 className='text-lg font-bold @xl/page:text-xl'>投稿内容について</h2>
        <p className='leading-relaxed'>MisskeyはActivityPubという規格に対応しており、それに対応しているサーバーと繋がることができます。</p>
        <p className='leading-relaxed'>Misskeyで投稿したものは、他のサーバーへ無数にコピーされます。</p>
        <p className='leading-relaxed'>つまり、一度投稿したものは(ノートを削除しても)、完全に消すことは不可能です。</p>
        <p className='leading-relaxed'>投稿する前に、いま一度内容を確認すると良いでしょう。</p>
      </section>
      <section className='space-y-3'>
        <h2 className='text-lg font-bold @xl/page:text-xl'>通報機能について</h2>
        <p className='leading-relaxed'>ほとんどのサーバーでは、通報はモデレーターが手動で処理しています。他の利用者の通報が埋もれてしまうのを防ぐため、通報機能を乱用するのはやめましょう。</p>
        <p className='leading-relaxed'>通報をする前に、まずはユーザーのブロック・ミュート、ワードのミュート等を試すべきです。</p>
        <p className='leading-relaxed'>通報本文のURLが適切に参照できないことがあります。通報する際には「通報理由」をより詳しく記述してください。</p>
        <p className='leading-relaxed'>また、モデレーターには チャットやダイレクト投稿のやり取りを見ることができません。より詳しくお知らせください。</p>
      </section>
      <section className='space-y-3'>
        <h2 className='text-lg font-bold @xl/page:text-xl'>リアクションについて</h2>
        <p className='leading-relaxed'>トラブルの原因になるので、無作為にリアクションをしたり、相手が不快に感じるリアクションをしたりするのはやめましょう。</p>
      </section>
      <section className='space-y-3'>
        <h2 className='text-lg font-bold @xl/page:text-xl'>長文について</h2>
        <p className='leading-relaxed'>長文を投稿する際はCWを有効にすると良いです。</p>
        <p className='leading-relaxed'>CWを使わなかった場合でも、Misskeyのバージョンとサーバーにもよりますが、文章が501字以上・改行が9つ(つまり文章が10行)以上 であれば自動で省略されます。</p>
        <p className='leading-relaxed'>裏を返せば、文章が500字以下・9行以下で、文章が長く感じたらCWを有効にするべきです。</p>
      </section>
      <section className='space-y-3'>
        <h2 className='text-lg font-bold @xl/page:text-xl'>アンケートについて</h2>
        <p className='leading-relaxed'>朝昼からアンケートしても、票が集まることはないでしょう。理由として、社会人は働き、学生は学業に励んでいるためです。</p>
        <p className='leading-relaxed'>YouTuberが17〜20時ごろに動画投稿をするように、見てほしい投稿はその時間帯にすると良いでしょう。</p>
        <p className='leading-relaxed'>また、アンケートに反対(アンチ)意見を取り入れるのはやめた方が良いです。反対意見に票が入ることでトラブルに発展することがあるためです。</p>
      </section>
      <section className='space-y-3'>
        <h2 className='text-lg font-bold @xl/page:text-xl'>RN稼ぎについて</h2>
        <p className='leading-relaxed'>「RN(リアクション)の数で〇〇」(例えば「RNの数で本名の一部を晒す」「RN+リアクションの数で写真晒す」など)は、いわゆるRN稼ぎとして、よくない印象を持たれてしまいます。</p>
        <p className='leading-relaxed'>また、意図しない個人情報の漏洩や、個人の特定などの恐れがあるため、このような投稿はしない方がいいでしょう。</p>
        <p className='leading-relaxed'>このような投稿を見かけた場合、RNはしないようにしましょう。</p>
      </section>
      <section className='space-y-3'>
        <h2 className='text-lg font-bold @xl/page:text-xl'>連続RN・大量のRNについて</h2>
        <p className='font-bold leading-relaxed'>やめてください。</p>
        <p className='leading-relaxed'>いくらRNを繰り返したところで、RNのカウントは増えません。また、大量のRNは他の利用者に迷惑です。</p>
        <p className='leading-relaxed'>どうしてもRNの回数が多くなる場合は、次の方法を試してください。</p>
        <ul className='list-disc pl-8'>
          <li>引用の画面を開く</li>
          <li>公開範囲を「ホーム」にする</li>
          <li>文章を書かずに引用する</li>
        </ul>
        <p className='leading-relaxed'>参考: <LinkText href='https://submarin.online/notes/96em1yn6dd' /></p>
      </section>
      <section className='space-y-3'>
        <h2 className='text-lg font-bold @xl/page:text-xl'>連投について</h2>
        <p className='font-bold leading-relaxed'>やめてください。</p>
        <p className='leading-relaxed'>あなた1人が連投をすることで、数千・数万人のユーザーに迷惑がかかります。</p>
      </section>
      <section className='space-y-3'>
        <h2 className='text-lg font-bold @xl/page:text-xl'>ネガティブな投稿について</h2>
        <p className='leading-relaxed'>「死にたい」「自殺したい」などのネガティブな投稿をパブリックに流すのは、はっきり言って目障りなのでやめてください。</p>
        <p className='leading-relaxed'>もしネガティブな投稿や皮肉めいた発言をする場合は、パブリックではなく、ホームもしくはフォロワー公開にするべきでしょう。</p>
        <p className='leading-relaxed'>常にネガティブな思考な方は、Misskeyをするのではなく、然るべきカウンセリングを受け、社会への復帰を目指してください。</p>
      </section>
    </article>
  );
}
