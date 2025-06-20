import HeadingText from '@/components/HeadingText';
import LinkText from '@/components/LinkText';
import AsmrSectionTitle from '@/features/AsmrSectionTitle';
import type { Metadata } from '@/types/Metadata';
import { generateDlafLink } from '@/utils/generateDlafLink';

export const metadata = {
  title: 'おすすめの音声作品を紹介するだけ',
  description: 'taiyがひたすら音声作品を紹介するページです。',
} as const satisfies Metadata;

export default function Page() {
  return (
    <article class='space-y-10'>
      <header class='space-y-3'>
        <HeadingText level={1}>
          おすすめの音声作品を紹介するだけ
        </HeadingText>
        <p class='leading-relaxed'>
          taiyがひたすら音声作品を紹介するページです。アフィリエイトリンクを含みます。
        </p>
      </header>
      <section
        class={`
          space-y-6
          [counter-reset:asmr-count_0]
        `}
      >
        <div class='space-y-3'>
          <h2
            class={`
              grid grid-cols-[auto_1fr] items-center gap-3 text-lg font-bold
              @xl:text-xl
            `}
          >
            <div>全年齢向け</div>
            <div
              aria-hidden='true'
              class='h-0.5 min-w-[30cqw] bg-[#68d917]'
            />
          </h2>
          <p class='leading-relaxed'>
            まずは全年齢向けの音声作品を紹介します。成人向けサイトのリンクを含むことがあります。
          </p>
        </div>
        <section
          class={`
            space-y-2
            [counter-increment:asmr-count_1]
          `}
        >
          <AsmrSectionTitle
            workType='general'
            workName='あなたのことが大好きなメイドの極上お耳ご奉仕でいつの間にか寝ちゃう。'
            workNumber='RJ343025'
          />
          <p class='leading-relaxed'>
            指かきとかお耳はむはむとかしてくれるお話です。作中通して雰囲気が柔らかくて好きです。
          </p>
        </section>
        <section
          class={`
            space-y-2
            [counter-increment:asmr-count_1]
          `}
        >
          <AsmrSectionTitle
            workType='general'
            workName='妹の友達のだらけメスガキの怠慢耳ほじりで俺は敗ける。'
            workNumber='RJ397394'
          />
          <p class='leading-relaxed'>
            めんどくさがりなだらけメスガキが指かきとかしてくれるお話です。
          </p>
        </section>
        <section
          class={`
            space-y-2
            [counter-increment:asmr-count_1]
          `}
        >
          <AsmrSectionTitle
            workType='general'
            workName='妹の友達のエルフメスガキの森の癒し耳ほじりで俺は敗ける。'
            workNumber='RJ01019302'
          />
          <p class='leading-relaxed'>
            エルフメスガキが自然の中で耳かきとかお耳ふーとかしてくれるお話です。
          </p>
        </section>
        <section
          class={`
            space-y-2
            [counter-increment:asmr-count_1]
          `}
        >
          <AsmrSectionTitle
            workType='teen'
            workName='不眠症の眠り姫～あなたと眠る異世界生活～'
            workNumber='RJ01129638'
          />
          <p class='leading-relaxed'>
            不眠症のヒロインと添い寝するお話です。おやす耳舐めがとても心地よいです。
          </p>
        </section>
        <section
          class={`
            space-y-2
            [counter-increment:asmr-count_1]
          `}
        >
          <AsmrSectionTitle
            workType='teen'
            workName='メンヘラの義妹に死ぬほど束縛されて愛される'
            workNumber='RJ411944'
          />
          <p class='leading-relaxed'>
            メンヘラ幼馴染義妹方言女子に、あまあま耳舐めされちゃうお話です。
          </p>
        </section>
        <section
          class={`
            space-y-2
            [counter-increment:asmr-count_1]
          `}
        >
          <AsmrSectionTitle
            workType='teen'
            workName='松山さんは合法ロリ 〜でもロリコンはお断り！〜'
            workNumber='RJ01189053'
          />
          <p class='leading-relaxed'>
            ダウナーなヒロインに少し邪険に扱われながらも、耳かきや耳舐めをしてくれるお話です。
          </p>
        </section>
      </section>
      <section
        class={`
          space-y-6
          [counter-reset:asmr-count_0]
        `}
      >
        <div class='space-y-3'>
          <h2
            class={`
              grid grid-cols-[auto_1fr] items-center gap-3 text-lg font-bold
              @xl:text-xl
            `}
          >
            <div>成人向け</div>
            <div
              aria-hidden='true'
              class='h-0.5 min-w-[30cqw] bg-[#4baef3]'
            />
          </h2>
          <p class='leading-relaxed'>
            最後に成人向けの音声作品を紹介します。成人向けサイトのリンクを含みます。
          </p>
        </div>
        <section
          class={`
            space-y-2
            [counter-increment:asmr-count_1]
          `}
        >
          <AsmrSectionTitle
            workType='adult'
            workName='まいにちソフレ'
            workNumber='RJ01238763'
          />
          <p class='leading-relaxed'>
            ソフレ(添い寝フレンド)を隣に召喚して、安眠射精添い寝させてくれるお話です。
          </p>
        </section>
        <section
          class={`
            space-y-2
            [counter-increment:asmr-count_1]
          `}
        >
          <AsmrSectionTitle
            workType='adult'
            workName='無表情な妹の甘々でちょっとイジワルな愛され性欲処理♪'
            workNumber='RJ302316'
          />
          <p class='leading-relaxed'>
            無表情妹ちゃん(ブラコン)にあまあまイジワル搾精えっちされちゃうお話です。
          </p>
          <p class='leading-relaxed'>
            続編の<LinkText href={generateDlafLink({ productId: 'RJ349453', salesArea: 'maniax' })} external sponsored>無表情な妹のもっと甘々でイジワルなイチャラブ溺愛搾精♪</LinkText>もよろしくお願いします。
          </p>
        </section>
        <section
          class={`
            space-y-2
            [counter-increment:asmr-count_1]
          `}
        >
          <AsmrSectionTitle
            workType='adult'
            workName='あまあま小悪魔～超密着0距離音声～'
            workNumber='RJ318205'
          />
          <p class='leading-relaxed'>
            小悪魔属性のヒロインたちとあまあまえっちするお話です。いつもお世話になっております。
          </p>
          <p class='leading-relaxed'>
            続編の<LinkText href={generateDlafLink({ productId: 'RJ381836', salesArea: 'maniax' })} external sponsored>あまあま小悪魔2～超密着0距離ご奉仕～</LinkText>もよろしくお願いします。
          </p>
        </section>
        <section
          class={`
            space-y-2
            [counter-increment:asmr-count_1]
          `}
        >
          <AsmrSectionTitle
            workType='adult'
            workName='ばぶ耳りふれ！'
            workNumber='RJ424711'
          />
          <p class='leading-relaxed'>
            ちかちゃんとかなちゃんに、気持ちいい音を聴かせてもらったり、気持ちいいことをさせてもらったりするお話です。
          </p>
          <p class='leading-relaxed'>
            姉妹店の<LinkText href={generateDlafLink({ productId: 'RJ277473', salesArea: 'maniax' })} external sponsored>JK耳リフレ！</LinkText>もよろしくお願いします。
          </p>
        </section>
        <section
          class={`
            space-y-2
            [counter-increment:asmr-count_1]
          `}
        >
          <AsmrSectionTitle
            workType='adult'
            workName='君にささめく、塚松さん。 -じゃあ、マスク外して『ナマ』の声聞いてみる？-'
            workNumber='RJ01065777'
          />
          <p class='leading-relaxed'>
            あの、まずは購入して聴いてほしいのですが、ヒロインの声質と、音作りが、すごいです。うまく言語化できませんが、とにかくすごいです。
          </p>
          <p class='leading-relaxed'>
            いい意味でイライラしながらいつも聴いております。本当にありがとうございます。
          </p>
        </section>
        <section
          class={`
            space-y-2
            [counter-increment:asmr-count_1]
          `}
        >
          <AsmrSectionTitle
            workType='adult'
            workName='おふとんあたためようかい'
            workNumber='RJ01127400'
          />
          <p class='leading-relaxed'>
            自称・座敷童のヒロインたちにあまあまイジワルされちゃうお話です。
          </p>
          <p class='leading-relaxed'>
            余談ですが、<LinkText href='https://team.matechan.com/notes/9om1fpzyfe' external>まてかすがこの作品を購入した経緯</LinkText>がおもろいので見ていってください。
          </p>
        </section>
      </section>
    </article>
  );
}
