import { jsxRenderer } from 'hono/jsx-renderer';

import BaseLayout from '@/layouts/BaseLayout';

export default jsxRenderer(({ children, metadata }) => {
  return (
    <BaseLayout
      metadata={metadata}
    >
      {children}
    </BaseLayout>
  );
});
