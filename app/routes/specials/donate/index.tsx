import LinkEmail from '@/components/$LinkEmail';
import HeadingText from '@/components/HeadingText';
import HeadingTextWithCaption from '@/components/HeadingTextWithCaption';
import LinkText from '@/components/LinkText';
import { PATRON_LIST } from '@/constants/patron';
import type { Metadata } from '@/types/Metadata';

export const metadata = {
  title: 'taiyを支援する',
  description: 'taiyを支援する方法について掲載しています。',
} as const satisfies Metadata;

export default function Page() {
  return (
    <article class='space-y-10'>
      <header class='space-y-3'>
        <HeadingText level={1}>
          taiyを支援する
        </HeadingText>
        <p class='leading-relaxed'>
          taiy個人、または関連するプロジェクトを応援したい方は、支援をご検討ください。
        </p>
      </header>
      <section class='space-y-3'>
        <HeadingText level={2}>
          支援方法
        </HeadingText>
        <p class='leading-relaxed'>
          支援は、次の方法をお試しください。
        </p>
        <ul class='list-disc space-y-1 pl-6'>
          <li>
            PayPay: @taiy
          </li>
          <li>
            <LinkText
              href='https://forbooks.jp/products/dld003p'
              external
            >
              DLギフトカード
            </LinkText>
          </li>
          <li>
            <LinkText
              href='https://www.amazon.co.jp/dp/B004N3APGO'
              external
            >
              Amazonギフトカード
            </LinkText>
          </li>
          <li>
            <LinkText
              href='/to/wishlist'
              external
            >
              Amazon.co.jp ほしいものリスト
            </LinkText>
          </li>
          <li>
            <LinkText
              href='https://giftee.com/u/taiy'
              external
            >
              giftee ほしいものリスト
            </LinkText>
          </li>
          <li>
            <LinkText
              href='https://github.com/sponsors/taiyme'
              external
            >
              GitHub Sponsors
            </LinkText>
          </li>
        </ul>
      </section>
      <section class='space-y-3'>
        <HeadingText level={2}>
          宛先
        </HeadingText>
        <p class='leading-relaxed'>
          ギフトコードは、次の宛先に送信してください。
        </p>
        <ul class='list-disc space-y-1 pl-6'>
          <li>メールアドレス: <LinkEmail user='me' domain='taiy.me' /></li>
          <li>Discord: @taiy</li>
        </ul>
      </section>
      <section class='space-y-3'>
        <HeadingTextWithCaption
          level={2}
          heading='支援者'
          caption='敬称略・順不同'
        />
        <ul
          class={`
            mb-10 grid grid-cols-[repeat(auto-fill,minmax(8rem,1fr))] gap-2
            *:block
          `}
        >
          {PATRON_LIST.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
        <p class='leading-relaxed'>
          ご支援いただき、本当にありがとうございます！
        </p>
        <p class='leading-relaxed'>
          皆さまからいただいた資金は、開発費や音声作品代として活用させていただきます！
        </p>
      </section>
    </article>
  );
}
