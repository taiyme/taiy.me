import type { PropsWithChildren } from 'hono/jsx';

type Props = Readonly<
  PropsWithChildren<{
    level: 1 | 2 | 3;
    isPageTitle?: boolean;
  }>
>;

export function PageHeading({ children, isPageTitle, level }: Props) {
  const Heading = `h${level}` as const;

  if (isPageTitle) {
    return (
      <Heading
        class={`
          mb-4 text-2xl font-bold
          @xl/page:text-3xl
        `}
      >
        {children}
      </Heading>
    );
  } else {
    return (
      <Heading
        class={`
          text-lg font-bold
          @xl/page:text-xl
        `}
      >
        {children}
      </Heading>
    );
  }
}
