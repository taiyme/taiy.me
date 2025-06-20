import type { Child } from 'hono/jsx';

type Case_WithChildren = Readonly<{
  children: NonNullable<Child>;
  heading?: never;
}>;

type Case_WithHeading = Readonly<{
  heading: NonNullable<Child>;
  children?: never;
}>;

type Base_Heading = Readonly<{
  caption?: Child;
}>;

export type Heading = Readonly<
  & (
    | Case_WithChildren
    | Case_WithHeading
  )
  & Base_Heading
>;
