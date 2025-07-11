import type { Child } from 'hono/jsx';

export type HeadingTextProps = Readonly<{
  children: NonNullable<Child>;
}>;

export type HeadingTextWithCaptionProps = Readonly<{
  heading: NonNullable<Child>;
  caption: NonNullable<Child>;
}>;
