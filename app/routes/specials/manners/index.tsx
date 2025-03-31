import LinkText from '@/components/LinkText';
import { PageHeading } from '@/components/PageHeading';
import type { Metadata } from '@/types/metadata';

export const metadata = {
  path: '/specials/manners',
  title: 'Misskeyの利用マナー',
  description: 'Misskeyの利用マナーを掲載しています。',
} as const satisfies Metadata;

export default function Page() {
  return (
    <article class='flex flex-col gap-8'>
      <header class='space-y-3'>
        <PageHeading level={1} isPageTitle>Misskeyの利用マナー</PageHeading>
        <p class='leading-relaxed'>随時更新します。</p>
        <p class='leading-relaxed'>この利用マナーは個人の意見に基づくものであり、実際には各サーバーの利用規約等が優先されます。</p>
        <p class='leading-relaxed italic'>免責: この利用マナーに基づいた投稿について、著者は一切責任を負いません。</p>
      </header>
      <section class='space-y-3'>
        <PageHeading level={2}>投稿内容について</PageHeading>
        <p class='leading-relaxed'>MisskeyはActivityPubという規格に対応しており、それに対応しているサーバーと繋がることができます。</p>
        <p class='leading-relaxed'>Misskeyで投稿したものは、他のサーバーへ無数にコピーされます。</p>
        <p class='leading-relaxed'>つまり、一度投稿したものは(ノートを削除しても)、完全に消すことは不可能です。</p>
        <p class='leading-relaxed'>投稿する前に、いま一度内容を確認すると良いでしょう。</p>
      </section>
      <section class='space-y-3'>
        <PageHeading level={2}>通報機能について</PageHeading>
        <p class='leading-relaxed'>ほとんどのサーバーでは、通報はモデレーターが手動で処理しています。他の利用者の通報が埋もれてしまうのを防ぐため、通報機能を乱用するのはやめましょう。</p>
        <p class='leading-relaxed'>通報をする前に、まずはユーザーのブロック・ミュート、ワードのミュート等を試すべきです。</p>
        <p class='leading-relaxed'>通報本文のURLが適切に参照できないことがあります。通報する際には「通報理由」をより詳しく記述してください。</p>
        <p class='leading-relaxed'>また、モデレーターには チャットやダイレクト投稿のやり取りを見ることができません。より詳しくお知らせください。</p>
      </section>
      <section class='space-y-3'>
        <PageHeading level={2}>リアクションについて</PageHeading>
        <p class='leading-relaxed'>トラブルの原因になるので、無作為にリアクションをしたり、相手が不快に感じるリアクションをしたりするのはやめましょう。</p>
      </section>
      <section class='space-y-3'>
        <PageHeading level={2}>長文について</PageHeading>
        <p class='leading-relaxed'>長文を投稿する際はCWを有効にすると良いです。</p>
        <p class='leading-relaxed'>CWを使わなかった場合でも、Misskeyのバージョンとサーバーにもよりますが、文章が501字以上・改行が9つ(つまり文章が10行)以上 であれば自動で省略されます。</p>
        <p class='leading-relaxed'>裏を返せば、文章が500字以下・9行以下で、文章が長く感じたらCWを有効にするべきです。</p>
      </section>
      <section class='space-y-3'>
        <PageHeading level={2}>アンケートについて</PageHeading>
        <p class='leading-relaxed'>朝昼からアンケートしても、票が集まることはないでしょう。理由として、社会人は働き、学生は学業に励んでいるためです。</p>
        <p class='leading-relaxed'>YouTuberが17〜20時ごろに動画投稿をするように、見てほしい投稿はその時間帯にすると良いでしょう。</p>
        <p class='leading-relaxed'>また、アンケートに反対(アンチ)意見を取り入れるのはやめた方が良いです。反対意見に票が入ることでトラブルに発展することがあるためです。</p>
      </section>
      <section class='space-y-3'>
        <PageHeading level={2}>RN稼ぎについて</PageHeading>
        <p class='leading-relaxed'>「RN(リアクション)の数で〇〇」(例えば「RNの数で本名の一部を晒す」「RN+リアクションの数で写真晒す」など)は、いわゆるRN稼ぎとして、よくない印象を持たれてしまいます。</p>
        <p class='leading-relaxed'>また、意図しない個人情報の漏洩や、個人の特定などの恐れがあるため、このような投稿はしない方がいいでしょう。</p>
        <p class='leading-relaxed'>このような投稿を見かけた場合、RNはしないようにしましょう。</p>
      </section>
      <section class='space-y-3'>
        <PageHeading level={2}>連続RN・大量のRNについて</PageHeading>
        <p class='leading-relaxed font-bold'>やめてください。</p>
        <p class='leading-relaxed'>いくらRNを繰り返したところで、RNのカウントは増えません。また、大量のRNは他の利用者に迷惑です。</p>
        <p class='leading-relaxed'>どうしてもRNの回数が多くなる場合は、次の方法を試してください。</p>
        <ul class='list-disc pl-8'>
          <li>引用の画面を開く</li>
          <li>公開範囲を「ホーム」にする</li>
          <li>文章を書かずに引用する</li>
        </ul>
        <p class='leading-relaxed'>参考: <LinkText href='https://submarin.online/notes/96em1yn6dd' external /></p>
      </section>
      <section class='space-y-3'>
        <PageHeading level={2}>連投について</PageHeading>
        <p class='leading-relaxed font-bold'>やめてください。</p>
        <p class='leading-relaxed'>あなた1人が連投をすることで、数千・数万人のユーザーに迷惑がかかります。</p>
      </section>
      <section class='space-y-3'>
        <PageHeading level={2}>ネガティブな投稿について</PageHeading>
        <p class='leading-relaxed'>「死にたい」「自殺したい」などのネガティブな投稿をパブリックに流すのは、はっきり言って目障りなのでやめてください。</p>
        <p class='leading-relaxed'>もしネガティブな投稿や皮肉めいた発言をする場合は、パブリックではなく、ホームもしくはフォロワー公開にするべきでしょう。</p>
        <p class='leading-relaxed'>常にネガティブな思考な方は、Misskeyをするのではなく、然るべきカウンセリングを受け、社会への復帰を目指してください。</p>
      </section>
    </article>
  );
}
