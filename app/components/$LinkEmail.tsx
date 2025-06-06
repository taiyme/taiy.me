import { type MouseEvent, useCallback, useState } from 'hono/jsx';

type Props = Readonly<{
  user: string;
  domain: string;
}>;

export default function LinkEmail({ user, domain }: Props) {
  const [show, setShow] = useState(false);
  const email = `${user}@${domain}`;

  const onClick = useCallback((ev: MouseEvent) => {
    if (!ev.isTrusted) return;
    setShow(true);
  }, []);

  if (show) return (
    <a
      href={`mailto:${email}`}
      class={`
        rounded-[2px] text-blue-600
        focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:outline-hidden
        hover-active-without-focus:underline
      `}
    >
      {email}
    </a>
  );

  return (
    <button
      onClick={onClick}
      class={`
        cursor-pointer rounded-[2px] text-blue-600
        focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:outline-hidden
        hover-active-without-focus:underline
      `}
    >
      クリックで表示
    </button>
  );
}
