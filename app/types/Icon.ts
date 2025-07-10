import type { JSX } from 'hono/jsx';
import type { OmitIndexSignature } from 'type-fest';

export type IconProps = Readonly<
  & Pick<
    OmitIndexSignature<JSX.HTMLAttributes>,
    | 'class'
  >
>;
