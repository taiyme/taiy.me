import type { Metadata } from 'next';
import type { Link } from 'next-view-transitions';

type StaticRoutes = Exclude<Extract<React.ComponentProps<typeof Link>['href'], `/${string}`>, `${string}${'?' | '#'}${string}`>;

type IsAny<T> = 0 extends 1 & T ? true : false;
type IsNever<T> = [T] extends [never] ? true : false;

type TypedPath<T extends StaticRoutes> = [IsAny<T>, IsNever<T>] extends [false, false] ? T : string;

type GenerateStaticMetadataProps = Readonly<{
  title: NonNullable<Metadata['title']>;
  description: NonNullable<Metadata['description']> | null;
  path: TypedPath<StaticRoutes> | null;
}>;

type GenerateStaticMetadataResult = Readonly<Required<
  Pick<
    Metadata,
    | 'title'
    | 'description'
    | 'alternates'
    | 'openGraph'
    | 'twitter'
  >
>>;

const getAbsoluteTitle = (value: GenerateStaticMetadataProps['title']) => {
  if (typeof value !== 'string') {
    if ('absolute' in value) return value.absolute;
    if ('default' in value) return value.default;
  }
  return value;
};

export const generateStaticMetadata = (props: GenerateStaticMetadataProps) => {
  if (props.path == null) {
    return {
      title: props.title,
      description: props.description,
      alternates: null,
      openGraph: null,
      twitter: null,
    } as const satisfies GenerateStaticMetadataResult;
  }

  return {
    title: props.title,
    description: props.description,
    alternates: {
      canonical: props.path,
    },
    openGraph: {
      type: props.path === '/' ? 'website' : 'article',
      siteName: 'taiy.me',
      title: getAbsoluteTitle(props.title),
      locale: 'ja_JP',
      images: {
        url: 'https://assets.taiy.me/taiy.me/favicons/open-graph.png',
        alt: 'taiyのアイコン',
        type: 'image/png',
        width: 384,
        height: 384,
      },
      url: props.path,
    },
    twitter: {
      card: 'summary',
    },
  } as const satisfies GenerateStaticMetadataResult;
};
