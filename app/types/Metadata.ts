import type { OpenGraph } from '@/types/OpenGraph';

type LayoutType = (
  | 'common'
  | 'zen'
);

type Base_Metadata = Readonly<{
  title: string;
  layoutType?: LayoutType;
}>;

type Case_Indexed = Readonly<(
  & {
    noIndex?: false;
    description: string;
  }
  & Base_Metadata
  & OpenGraph
)>;

type Case_NoIndex = Readonly<(
  & {
    noIndex: true;
  }
  & Base_Metadata
)>;

export type Metadata = Readonly<
  | Case_Indexed
  | Case_NoIndex
>;
