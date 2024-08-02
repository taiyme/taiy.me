import { headLinks } from '@/constants/headLinks';

export default function AppHead() {
  return (
    <head prefix='og: https://ogp.me/ns#'>
      {headLinks.map((props) => (
        <link
          key={JSON.stringify(props)}
          {...props}
        />
      ))}
    </head>
  );
}
