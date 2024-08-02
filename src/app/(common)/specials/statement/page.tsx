import type { Metadata } from 'next';

import LinkEmail from '@/components/LinkEmail';
import { generateStaticMetadata } from '@/utils/generateStaticMetadata';

export const metadata = {
  ...generateStaticMetadata({
    title: 'taiyの発音に関する公式声明',
    description: 'taiyの正式な発音は「たいいー」です。この件について公式声明を発表します。',
    path: '/specials/statement',
  }),
} as const satisfies Metadata;

export default function SpecialsStatementPage() {
  return (
    <article className='flex flex-col gap-6'>
      <section className='space-y-6'>
        <div className='flex justify-end text-right text-sm @xl/page:text-base'>
          <ul>
            <li><time dateTime='2023-09-16T15:00:00.000Z'>令和5年9月17日</time></li>
            <li><address className='inline not-italic'>taiy.me</address></li>
          </ul>
        </div>
        <h1 className='text-center text-xl font-bold @xl/page:text-2xl'>taiyの発音に関する公式声明</h1>
      </section>
      <section className='space-y-4'>
        <p className='leading-relaxed'>私の名前「taiy」に関して、近頃誤った発音によって誤解や混乱が生じていることについて、公式声明を発表させていただきます。</p>
        <p className='leading-relaxed'>最初に、「taiy」は「たいいー」と発音するべきであることを明確に申し上げます。</p>
        <p className='leading-relaxed'>この読み方は、私を私たらしめる重要な要素の1つであり、絶対に覆されてはならないものだと確信しております。</p>
        <p className='leading-relaxed'>また、一部の方々が誤って「たいわい」と発音し、それを「たい猥」などと関連付け、誤解が広まってしまったことについて、深い遺憾の意を表明いたします。</p>
        <p className='leading-relaxed'>この件に関しまして、法的手段を含め誤解の解消と名誉の回復に向けて必要な措置を検討し、適切な対応を取る覚悟でございます。</p>
        <p className='leading-relaxed'>最後に、私は「taiy」の発音に関する正確な情報を共有し、誤解を解消するための努力を続けて参ります。</p>
        <p className='leading-relaxed'>何かご質問やご疑義がございましたら、メール（<LinkEmail user='me' domain='taiy.me' />）へお問い合わせください。</p>
      </section>
      <section className='space-y-3'>
        <p className='text-right leading-relaxed'>以上</p>
      </section>
    </article>
  );
}
