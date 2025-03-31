import type { LiteralUnion } from 'type-fest';

import { DLAF_ID } from '@/constants/dlaf';

type Props = Readonly<{
  productId: string;
  salesArea: LiteralUnion<'home' | 'maniax', string>;
}>;

export function generateDlafLink({ productId, salesArea }: Props) {
  return `https://dlaf.jp/${salesArea}/dlaf/=/t/n/link/work/aid/${DLAF_ID}/id/${productId}.html`;
}
