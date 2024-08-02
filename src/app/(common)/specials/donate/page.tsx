import type { Metadata } from 'next';

import LinkCard from '@/components/LinkCard';
import LinkEmail from '@/components/LinkEmail';
import LinkText from '@/components/LinkText';
import { clsx } from '@/utils/clsx';
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
      <section className='space-y-3'>
        <h1 className='mb-4 text-2xl font-bold @xl/page:text-3xl'>taiyを支援する</h1>
        <p className='leading-relaxed'>taiy個人、または関連するプロジェクトを応援したい場合は、支援をご検討ください。</p>
      </section>
      <section className='space-y-3'>
        <h2 className='text-lg font-bold @xl/page:text-xl'>送金する</h2>
        <div
          className={clsx(`
            grid grid-cols-1 gap-4
            @xs/page:grid-cols-[repeat(auto-fill,minmax(16rem,1fr))]
          `)}
        >
          <LinkCard
            cardLabel={(
              <h3 className='inline font-bold'>Kyash</h3>
            )}
            cardDescription={(
              <>
                <p>Kyash ID: @taiy</p>
                <p>taiyが普段利用しているのでおすすめです。</p>
              </>
            )}
            cardTipType='recommended'
          />
          <LinkCard
            cardLabel={(
              <h3 className='inline font-bold'>PayPay</h3>
            )}
            cardDescription={(
              <>
                <p>PayPay ID: @taiy</p>
                <p>taiyが普段利用しているのでおすすめです。</p>
              </>
            )}
            cardTipType='recommended'
          />
        </div>
      </section>
      <section className='space-y-3'>
        <h2 className='text-lg font-bold @xl/page:text-xl'>継続支援する</h2>
        <div
          className={clsx(`
            grid grid-cols-1 gap-4
            @xs/page:grid-cols-[repeat(auto-fill,minmax(16rem,1fr))]
          `)}
        >
          <LinkCard
            href='https://taiy.fanbox.cc/'
            cardLabel={(
              <h3 className='inline font-bold'>pixivFANBOX</h3>
            )}
            cardDescription={(
              <>
                <p>毎月500円から支援できます。</p>
                <p>※ メンバーシップの特典はありません。</p>
              </>
            )}
          />
          <LinkCard
            href='https://www.patreon.com/taiy'
            cardLabel={(
              <h3 className='inline font-bold'>Patreon</h3>
            )}
            cardDescription={(
              <>
                <p>毎月5ドルから支援できます。</p>
                <p>※ メンバーシップの特典はありません。</p>
              </>
            )}
          />
        </div>
      </section>
      <section className='space-y-3'>
        <h2 className='text-lg font-bold @xl/page:text-xl'>その他</h2>
        <div
          className={clsx(`
            grid grid-cols-1 gap-4
            @xs/page:grid-cols-[repeat(auto-fill,minmax(16rem,1fr))]
          `)}
        >
          <LinkCard
            href='https://vivionblue.com/products/dld001p'
            cardLabel={(
              <h3 className='inline font-bold'>DLギフトカード</h3>
            )}
            cardDescription={(
              <p>音声作品代の支援ができます。</p>
            )}
            cardTipType='recommended'
          />
        </div>
        <ul className='list-disc pl-8'>
          <li>
            <LinkText href='https://u.taiy.me/amazon'>
              Amazon.co.jp ほしい物リスト
            </LinkText>
          </li>
          <li>
            <LinkText href='https://www.amazon.co.jp/dp/B004N3APGO'>
              Amazonギフトカード
            </LinkText>
          </li>
          <li>
            <LinkText href='https://www.starbucks.co.jp/dscgift/'>
              デジタル スターバックス カード ギフト
            </LinkText>
          </li>
        </ul>
      </section>
      <section className='space-y-3'>
        <h2 className='text-lg font-bold @xl/page:text-xl'>宛先</h2>
        <p className='leading-relaxed'>ギフト券のコードはDiscordかメールで送信してください。</p>
        <ul className='list-disc pl-8'>
          <li>Discord: @taiy</li>
          <li>メールアドレス: <LinkEmail user='me' domain='taiy.me' /></li>
        </ul>
      </section>
    </article>
  );
}
