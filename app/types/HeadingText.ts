import type { Child } from 'hono/jsx';

type Case_WithChildren = Readonly<{
  children: NonNullable<Child>;
  heading?: never;
}>;

type Case_WithHeading = Readonly<{
  heading: NonNullable<Child>;
  children?: never;
}>;

type BaseProps_HeadingText = Readonly<{
  caption?: Child;
}>;

export type HeadingTextProps = Readonly<
  & (
    | Case_WithChildren
    | Case_WithHeading
  )
  & BaseProps_HeadingText
>;
