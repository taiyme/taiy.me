'use client';

import { useCallback, useState } from 'react';

import { clsx } from '@/utils/clsx';

type LinkEmailProps = Readonly<{
  user: string;
  domain: string;
}>;

export default function LinkEmail({ user, domain }: LinkEmailProps) {
  const [show, setShow] = useState(false);
  const email = `${user}@${domain}`;

  const onClick = useCallback((ev: React.MouseEvent) => {
    if (!ev.isTrusted) return;
    setShow(true);
  }, []);

  return (
    <span>
      {show ? (
        <a
          href={`mailto:${email}`}
          className={clsx(`
            rounded-[2px]
            text-blue-600
            outline-none outline-0
            hover:underline
            focus-visible:!no-underline focus-visible:outline-2 focus-visible:ring-2
            active:underline
          `)}
        >
          {email}
        </a>
      ) : (
        <button
          onClick={onClick}
          className={clsx(`
            rounded-[2px]
            text-blue-600
            outline-none outline-0
            hover:underline
            focus-visible:!no-underline focus-visible:outline-2 focus-visible:ring-2
            active:underline
          `)}
        >
          表示する
        </button>
      )}
    </span>
  );
}
