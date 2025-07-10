import type { PropsWithChildren } from 'hono/jsx';

type InternalUrl = `/${string}`;

type ExternalUrl = `https://${string}` | `http://${string}` | `/to/${string}`;

type Case_InternalLink = Readonly<{
  external?: false;
  to: InternalUrl;
  href?: never;
}>;

type Case_ExternalLink = Readonly<{
  external: true;
  to?: never;
  href: ExternalUrl;
}>;

export type LinkProps = Readonly<
  & (
    | Case_InternalLink
    | Case_ExternalLink
  )
  & {
    author?: boolean;
    me?: boolean;
    sponsored?: boolean;
    privacyPolicy?: boolean;
  }
>;

export type LinkWithChildrenProps = Readonly<
  PropsWithChildren<LinkProps>
>;
