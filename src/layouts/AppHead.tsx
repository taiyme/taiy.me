import { headLinks } from '@/constants/headLinks';

export default function AppHead() {
  return (
    <head
      // eslint-disable-next-line react/no-unknown-property
      prefix='og: https://ogp.me/ns#'
    >
      {headLinks.map((props) => (
        <link
          key={JSON.stringify(props)}
          {...props}
        />
      ))}
    </head>
  );
}
