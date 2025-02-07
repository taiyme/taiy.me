import type { Metadata } from 'next';

import Grid from '@/components/Grid';
import LinkEmail from '@/components/LinkEmail';
import DonateCard from '@/features/DonateCard';
import DonateLinkCard from '@/features/DonateLinkCard';
import { generateStaticMetadata } from '@/utils/generateStaticMetadata';

export const metadata = {
  ...generateStaticMetadata({
    title: 'taiyを支援する',
    description: 'taiyを支援する方法について掲載しています。',
    path: '/specials/donate',
  }),
} as const satisfies Metadata;

export default function SpecialsDonatePage() {
  return (
    <article className='flex flex-col gap-8'>
      <header className='space-y-3'>
        <h1 className='mb-4 text-2xl font-bold @xl/page:text-3xl'>taiyを支援する</h1>
        <p className='leading-relaxed'>taiy個人、または関連するプロジェクトを応援したい場合は、支援をご検討ください。</p>
      </header>
      <section className='space-y-3'>
        <h2 className='text-lg font-bold @xl/page:text-xl'>支援方法</h2>
        <Grid>
          <DonateCard
            label={(
              <h3 className='inline font-bold'>Kyash: @taiy</h3>
            )}
            description={(
              <p>生活費の足しになります</p>
            )}
            recommended
          />
          <DonateCard
            label={(
              <h3 className='inline font-bold'>PayPay: @taiy</h3>
            )}
            description={(
              <p>飲食代の足しになります</p>
            )}
          />
          <DonateLinkCard
            href='https://forbooks.jp/products/dld003p'
            label={(
              <h3 className='inline font-bold'>DLギフトカード</h3>
            )}
            description={(
              <p>音声作品代の足しになります</p>
            )}
          />
          <DonateLinkCard
            href='https://www.amazon.co.jp/dp/B004N3APGO'
            label={(
              <h3 className='inline font-bold'>Amazonギフトカード</h3>
            )}
            description={(
              <p>日用品代の足しになります</p>
            )}
          />
          <DonateLinkCard
            href='https://u.taiy.me/amazon'
            label={(
              <h3 className='inline font-bold'>Amazon.co.jp ほしいものリスト</h3>
            )}
            description={(
              <p>モンスター パイプラインパンチが好き</p>
            )}
          />
          <DonateLinkCard
            href='https://giftee.com/u/taiy'
            label={(
              <h3 className='inline font-bold'>giftee ほしいものリスト</h3>
            )}
            description={(
              <p>ピザーラのカレーモントレーが好き</p>
            )}
          />
        </Grid>
      </section>
      <section className='space-y-3'>
        <h2 className='text-lg font-bold @xl/page:text-xl'>宛先</h2>
        <p className='leading-relaxed'>ギフトコードはDiscordかメールで送信してください。</p>
        <ul className='list-disc pl-8'>
          <li>Discord: @taiy</li>
          <li>メールアドレス: <LinkEmail user='me' domain='taiy.me' /></li>
        </ul>
      </section>
    </article>
  );
}
