import type { Metadata } from 'next';

import CommonLayout from '@/layouts/CommonLayout';
import { generateStaticMetadata } from '@/utils/generateStaticMetadata';

export const metadata = {
  ...generateStaticMetadata({
    title: 'ご指定のページが見つかりませんでした',
    description: null,
    path: null,
  }),
} as const satisfies Metadata;

export default function NotFound() {
  return (
    <CommonLayout>
      <article className='flex flex-col gap-8'>
        <section className='space-y-3'>
          <h1 className='mb-4 text-2xl font-bold @xl/page:text-3xl'>404 Not Found</h1>
          <p className='leading-relaxed'>ご指定のページが見つかりませんでした。</p>
          <p className='leading-relaxed'>一時的にアクセスができない状態か、削除または移動された可能性があります。</p>
        </section>
      </article>
    </CommonLayout>
  );
}
