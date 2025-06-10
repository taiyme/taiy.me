import LinkEmail from '@/components/$LinkEmail';
import PageGrid from '@/components/PageGrid';
import { PageHeading } from '@/components/PageHeading';
import DonateCard from '@/features/DonateCard';
import DonateLinkCard from '@/features/DonateLinkCard';
import type { Metadata } from '@/types/metadata';

export const metadata = {
  path: '/specials/donate',
  title: 'taiyを支援する',
  description: 'taiyを支援する方法について掲載しています。',
} as const satisfies Metadata;

export default function Page() {
  return (
    <article class='space-y-10'>
      <header class='space-y-3'>
        <PageHeading level={1} isPageTitle>
          taiyを支援する
        </PageHeading>
        <p class='leading-relaxed'>
          taiy個人、または関連するプロジェクトを応援したい場合は、支援をご検討ください。
        </p>
      </header>
      <section class='space-y-3'>
        <PageHeading level={2}>
          支援方法
        </PageHeading>
        <PageGrid>
          <DonateCard
            label={(
              <h3 class='inline font-bold'>Kyash: @taiy</h3>
            )}
            description={(
              <p>生活費の足しになります</p>
            )}
            recommended
          />
          <DonateCard
            label={(
              <h3 class='inline font-bold'>PayPay: @taiy</h3>
            )}
            description={(
              <p>飲食代の足しになります</p>
            )}
          />
          <DonateLinkCard
            label={(
              <h3 class='inline font-bold'>DLギフトカード</h3>
            )}
            description={(
              <p>音声作品代の足しになります</p>
            )}
            href='https://forbooks.jp/products/dld003p'
            external
          />
          <DonateLinkCard
            label={(
              <h3 class='inline font-bold'>Amazonギフトカード</h3>
            )}
            description={(
              <p>日用品代の足しになります</p>
            )}
            href='https://www.amazon.co.jp/dp/B004N3APGO'
            external
          />
          <DonateLinkCard
            label={(
              <h3 class='inline font-bold'>Amazon.co.jp ほしいものリスト</h3>
            )}
            description={(
              <p>モンスター パイプラインパンチが好き</p>
            )}
            href='https://u.taiy.me/amazon'
            external
          />
          <DonateLinkCard
            label={(
              <h3 class='inline font-bold'>giftee ほしいものリスト</h3>
            )}
            description={(
              <p>ピザーラのカレーモントレーが好き</p>
            )}
            href='https://giftee.com/u/taiy'
            external
          />
        </PageGrid>
      </section>
      <section class='space-y-3'>
        <PageHeading level={2}>
          宛先
        </PageHeading>
        <p class='leading-relaxed'>
          ギフトコードはDiscordかメールで送信してください。
        </p>
        <ul class='list-disc pl-8'>
          <li>Discord: @taiy</li>
          <li>メールアドレス: <LinkEmail user='me' domain='taiy.me' /></li>
        </ul>
      </section>
    </article>
  );
}
