import type { NotFoundHandler } from 'hono';

import HeadingText from '@/components/HeadingText';
import type { Metadata } from '@/types/metadata';

const handler: NotFoundHandler = (c) => {
  const metadata = {
    title: 'ご指定のページが見つかりませんでした',
    noIndex: true,
  } as const satisfies Metadata;

  c.status(404);

  return c.render(
    (
      <div class='space-y-3'>
        <HeadingText level={1}>
          404 Not Found
        </HeadingText>
        <p class='leading-relaxed'>
          ご指定のページが見つかりませんでした。
        </p>
        <p class='leading-relaxed'>
          一時的にアクセスができない状態か、削除または移動された可能性があります。
        </p>
      </div>
    ),
    { metadata },
  );
};

export default handler;
