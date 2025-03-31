import type { Except, LiteralUnion, RequireAllOrNone } from 'type-fest';

type MetadataBase = Readonly<{
  path: `/${string}`;
  title: string;
  description: string;
  layoutType?: 'common' | 'commonSimple';
}>;

type MetadataBaseOpenGraph = Readonly<
  & {
    ogType?: 'website' | 'article';
    cardType?: 'summary' | 'summary_large_image';
  }
  & RequireAllOrNone<MetadataBaseOpenGraphImage>
>;

export type MetadataBaseOpenGraphImage = Readonly<{
  ogImageUrl: string;
  ogImageAlt: string;
  ogImageType: LiteralUnion<'image/png' | 'image/jpeg' | 'image/webp', string>;
  ogImageWidth: number;
  ogImageHeight: number;
}>;

type MetadataItemIndex = Readonly<(
  & {
    noIndex?: boolean;
  }
  & MetadataBase
  & MetadataBaseOpenGraph
)>;

type MetadataItemNoIndex = Readonly<(
  & {
    noIndex: true;
  }
  & Except<
    MetadataBase,
    | 'path'
    | 'description'
  >
)>;

export type Metadata = (
  | MetadataItemIndex
  | MetadataItemNoIndex
);
