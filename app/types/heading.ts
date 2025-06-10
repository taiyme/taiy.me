import type { Child } from 'hono/jsx';

type Case_WithChildren = Readonly<{
  children: NonNullable<Child>;
  heading?: never;
}>;

type Case_WithHeading = Readonly<{
  heading: NonNullable<Child>;
  children?: never;
}>;

export type HeadingBaseProps = Readonly<
  & (
    | Case_WithChildren
    | Case_WithHeading
  )
  & {
    caption?: Child;
  }
>;
