import type { PropsWithChildren } from 'hono/jsx';

type LinkAttrsInternal = Readonly<{
  to: `/${string}`;
  href?: never;
  external?: false;
}>;

type LinkAttrsExternal = Readonly<{
  href: string;
  to?: never;
  external: true;
}>;

type LinkAttrsAdditional = Readonly<{
  author?: boolean;
  me?: boolean;
  sponsored?: boolean;
  privacyPolicy?: boolean;
}>;

export type LinkBaseProps = Readonly<
  & (
    | LinkAttrsInternal
    | LinkAttrsExternal
  )
  & LinkAttrsAdditional
>;

export type LinkBasePropsWithChildren = Readonly<
  PropsWithChildren<LinkBaseProps>
>;
