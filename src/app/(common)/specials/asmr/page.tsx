import type { Metadata } from 'next';

import LinkText from '@/components/LinkText';
import ASMRSectionTitle from '@/features/ASMRSectionTitle';
import { generateStaticMetadata } from '@/utils/generateStaticMetadata';

export const metadata = {
  ...generateStaticMetadata({
    title: 'おすすめの音声作品を紹介するだけ',
    description: 'taiyがひたすら音声作品を紹介するページです。',
    path: '/specials/asmr',
  }),
} as const satisfies Metadata;

export default function SpecialsAsmrPage() {
  return (
    <article className='flex flex-col gap-10'>
      <header className='space-y-3'>
        <h1 className='mb-4 text-2xl font-bold @xl/page:text-3xl'>おすすめの音声作品を紹介するだけ</h1>
        <p className='leading-relaxed'>taiyがひたすら音声作品を紹介するページです。アフィリエイトリンクを含みます。</p>
      </header>
      <section className='space-y-6 [counter-reset:asmr-count_0]'>
        <div className='space-y-3'>
          <h2 className='grid grid-cols-[auto_1fr] items-center gap-3 text-lg font-bold @xl/page:text-xl'>
            <div>全年齢向け</div>
            <div
              aria-hidden='true'
              className='h-0.5 min-w-[30cqw] bg-[#68d917]'
            />
          </h2>
          <p className='leading-relaxed'>まずは全年齢向けの音声作品を紹介します。成人向けサイトのリンクを含むことがあります。</p>
        </div>
        <section className='space-y-2 [counter-increment:asmr-count_1]'>
          <ASMRSectionTitle
            workType='general'
            workName='あなたのことが大好きなメイドの極上お耳ご奉仕でいつの間にか寝ちゃう。'
            workNumber='RJ343025'
          />
          <p className='leading-relaxed'>指かきとかお耳はむはむとかしてくれるお話です。作中通して雰囲気が柔らかくて好きです。</p>
        </section>
        <section className='space-y-2 [counter-increment:asmr-count_1]'>
          <ASMRSectionTitle
            workType='general'
            workName='妹の友達のだらけメスガキの怠慢耳ほじりで俺は敗ける。'
            workNumber='RJ397394'
          />
          <p className='leading-relaxed'>めんどくさがりなだらけメスガキが指かきとかしてくれるお話です。</p>
        </section>
        <section className='space-y-2 [counter-increment:asmr-count_1]'>
          <ASMRSectionTitle
            workType='general'
            workName='妹の友達のエルフメスガキの森の癒し耳ほじりで俺は敗ける。'
            workNumber='RJ01019302'
          />
          <p className='leading-relaxed'>エルフメスガキが自然の中で耳かきとかお耳ふーとかしてくれるお話です。</p>
        </section>
        <section className='space-y-2 [counter-increment:asmr-count_1]'>
          <ASMRSectionTitle
            workType='teen'
            workName='不眠症の眠り姫～あなたと眠る異世界生活～'
            workNumber='RJ01129638'
          />
          <p className='leading-relaxed'>不眠症のヒロインと添い寝するお話です。おやす耳舐めがとても心地よいです。</p>
        </section>
        <section className='space-y-2 [counter-increment:asmr-count_1]'>
          <ASMRSectionTitle
            workType='teen'
            workName='メンヘラの義妹に死ぬほど束縛されて愛される'
            workNumber='RJ411944'
          />
          <p className='leading-relaxed'>メンヘラ幼馴染義妹方言女子に、あまあま耳舐めされちゃうお話です。</p>
        </section>
        <section className='space-y-2 [counter-increment:asmr-count_1]'>
          <ASMRSectionTitle
            workType='teen'
            workName='松山さんは合法ロリ 〜でもロリコンはお断り！〜'
            workNumber='RJ01189053'
          />
          <p className='leading-relaxed'>ダウナーなヒロインに少し邪険に扱われながらも、耳かきや耳舐めをしてくれるお話です。</p>
        </section>
      </section>
      <section className='space-y-6 [counter-reset:asmr-count_0]'>
        <div className='space-y-3'>
          <h2 className='grid grid-cols-[auto_1fr] items-center gap-3 text-lg font-bold @xl/page:text-xl'>
            <div>成人向け</div>
            <div
              aria-hidden='true'
              className='h-0.5 min-w-[30cqw] bg-[#4baef3]'
            />
          </h2>
          <p className='leading-relaxed'>最後に成人向けの音声作品を紹介します。成人向けサイトのリンクを含みます。</p>
        </div>
        <section className='space-y-2 [counter-increment:asmr-count_1]'>
          <ASMRSectionTitle
            workType='adult'
            workName='捨て猫ダウナーをとことん愛でたら悶絶するほど幸せになる音声'
            workNumber='RJ270963'
          />
          <p className='leading-relaxed'>ケモ耳属性のヒロインをひたすらに愛でるお話です。捨て猫故、最初は警戒心が強いですが、トラックを重ねるごとにデレデレになります。</p>
          <p className='leading-relaxed'>この作品はシリーズ1作目です。<LinkText sponsored href='https://www.dlsite.com/maniax/dlaf/=/t/n/link/work/aid/taiyme/id/RJ297281.html' aria-label='白猫ダウナーと過ごす甘くて爽やかなえちえちサマーバケーション'>2作目</LinkText>と<LinkText sponsored href='https://www.dlsite.com/maniax/dlaf/=/t/n/link/work/aid/taiyme/id/RJ353250.html' aria-label='白猫ダウナーを永遠に愛でたくなる最上級の幸せ音声'>3作目</LinkText>もよろしくお願いします。</p>
        </section>
        <section className='space-y-2 [counter-increment:asmr-count_1]'>
          <ASMRSectionTitle
            workType='adult'
            workName='あまあま小悪魔～超密着0距離音声～'
            workNumber='RJ318205'
          />
          <p className='leading-relaxed'>小悪魔属性のヒロインたちとあまあまえっちするお話です。いつもお世話になっております。</p>
          <p className='leading-relaxed'>この作品はシリーズ1作目です。<LinkText sponsored href='https://www.dlsite.com/maniax/dlaf/=/t/n/link/work/aid/taiyme/id/RJ381836.html' aria-label='あまあま小悪魔2～超密着0距離ご奉仕～'>2作目</LinkText>もよろしくお願いします。</p>
        </section>
        <section className='space-y-2 [counter-increment:asmr-count_1]'>
          <ASMRSectionTitle
            workType='adult'
            workName='ばぶ耳りふれ！'
            workNumber='RJ424711'
          />
          <p className='leading-relaxed'>ちかちゃんとかなちゃんに、気持ちいい音を聴かせてもらったり、気持ちいいことをさせてもらったりするお話です。</p>
          <p className='leading-relaxed'>姉妹店の<LinkText sponsored href='https://www.dlsite.com/maniax/dlaf/=/t/n/link/work/aid/taiyme/id/RJ277473.html'>JK耳リフレ！</LinkText>もよろしくお願いします。</p>
        </section>
        <section className='space-y-2 [counter-increment:asmr-count_1]'>
          <ASMRSectionTitle
            workType='adult'
            workName='君にささめく、塚松さん。 -じゃあ、マスク外して『ナマ』の声聞いてみる?-'
            workNumber='RJ01065777'
          />
          <p className='leading-relaxed'>あの、まずは購入して聴いてほしいのですが、ヒロインの声質と、音作りが、すごいです。うまく言語化できませんが、とにかくすごいです。</p>
          <p className='leading-relaxed'>いい意味でイライラしながらいつも聴いております。本当にありがとうございます。</p>
        </section>
        <section className='space-y-2 [counter-increment:asmr-count_1]'>
          <ASMRSectionTitle
            workType='adult'
            workName='悪魔(わたし)とエッチできるなら死んでも構わない？'
            workNumber='RJ01092090'
          />
          <p className='leading-relaxed'>ダウナーロリ悪魔なヒロインにダメにされちゃうお話です。</p>
        </section>
        <section className='space-y-2 [counter-increment:asmr-count_1]'>
          <ASMRSectionTitle
            workType='adult'
            workName='おふとんあたためようかい'
            workNumber='RJ01127400'
          />
          <p className='leading-relaxed'>自称・座敷童のヒロインたちにあまあまイジワルされちゃうお話です。</p>
          <aside>
            <h4 className='sr-only'>余談</h4>
            <p className='leading-relaxed'>余談ですが、<LinkText href='https://team.matechan.com/notes/9om1fpzyfe'>まてかすがこの作品を購入した経緯</LinkText>がおもろいので見ていってください。</p>
          </aside>
        </section>
      </section>
    </article>
  );
}
