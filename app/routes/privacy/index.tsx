import LinkEmail from '@/components/$LinkEmail';
import { PageHeading } from '@/components/PageHeading';
import type { Metadata } from '@/types/metadata';

export const metadata = {
  path: '/privacy',
  title: 'プライバシーポリシー',
  description: 'taiyのサイトの個人情報の取扱いに関して掲載しています。',
} as const satisfies Metadata;

export default function Page() {
  return (
    <article class='space-y-10'>
      <header class='space-y-3'>
        <PageHeading level={1} isPageTitle>
          プライバシーポリシー
        </PageHeading>
        <p class='leading-relaxed'>
          taiy.me（以下「当サイト」といいます。）は、プライバシーの保護を最重視し、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます。）を定め、その適切な取扱いに努めます。
        </p>
      </header>
      <section class='space-y-3'>
        <PageHeading level={2}>
          収集する情報と目的
        </PageHeading>
        <p class='leading-relaxed'>
          当サイトは、個人のウェブサイトであり、訪問者の個人情報（ここでは「個人情報の保護に関する法律」第2条第1項で定義されるものを指します。以下同じ。）を収集することはありません。
        </p>
        <p class='leading-relaxed'>
          ただし、特定の個人を識別できない程度の情報（IPアドレス、Cookie、ウェブブラウザの種類など）を収集することがあります。これらの情報は、訪問者の利用状況を分析し、当サイトの改善に役立てるために使用します。
        </p>
      </section>
      <section class='space-y-3'>
        <PageHeading level={2}>
          アクセス解析ツール
        </PageHeading>
        <p class='leading-relaxed'>
          当サイトは、現在アクセス解析ツールを利用しておりません。
        </p>
      </section>
      <section class='space-y-3'>
        <PageHeading level={2}>
          広告配信
        </PageHeading>
        <p class='leading-relaxed'>
          当サイトは、現在広告を配信しておりません。
        </p>
      </section>
      <section class='space-y-3'>
        <PageHeading level={2}>
          外部リンク
        </PageHeading>
        <p class='leading-relaxed'>
          本ポリシーは、当サイトでのみ効力を持つものとします。外部リンクをクリックした場合は、リンク先のウェブサイトのプライバシーポリシーをご確認ください。
        </p>
      </section>
      <section class='space-y-3'>
        <PageHeading level={2}>
          免責事項
        </PageHeading>
        <p class='leading-relaxed'>
          当サイトの情報の正確性については万全を期しておりますが、その内容の正確性及び安全性を保証するものではありません。
        </p>
        <p class='leading-relaxed'>
          当サイトの利用によって訪問者及び第三者に生じた損害においては、当サイトの故意又は過失に起因する場合を除き、当サイトは責任を負わないものとします。
        </p>
        <p class='leading-relaxed'>
          当サイトは、EU一般データ保護規則（以下「GDPR」といいます。）に準拠しておりません。どうしても当サイトを利用したい場合は、GDPR非批准国に移住してからご利用ください。
        </p>
      </section>
      <section class='space-y-3'>
        <PageHeading level={2}>
          本ポリシーの変更
        </PageHeading>
        <p class='leading-relaxed'>
          本ポリシーの内容は、必要に応じて随時変更できるものとします。変更後のプライバシーポリシーは、当サイトに掲載した時点から効力を生じるものとします。
        </p>
      </section>
      <section class='space-y-3'>
        <PageHeading level={2}>
          お問い合わせ
        </PageHeading>
        <p class='leading-relaxed'>
          本ポリシーの内容に関するお問い合わせは、メール（<LinkEmail user='me' domain='taiy.me' />）までご連絡ください。
        </p>
      </section>
      <footer class='space-y-3'>
        <div class='flex justify-end'>
          <ul>
            <li><time datetime='2024-08-06T15:00:00.000Z'>2024年8月7日</time>策定</li>
          </ul>
        </div>
      </footer>
    </article>
  );
}
