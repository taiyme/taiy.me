import { defaultAvatar } from '@/constants/avatarList';

export const headLinks = [{
  rel: 'preconnect',
  href: 'https://assets.taiy.me',
}, {
  rel: 'preload',
  href: defaultAvatar,
  as: 'image',
  type: 'image/webp',
}, {
  rel: 'me',
  href: 'https://misskey.io/@taiy',
}, {
  rel: 'me',
  href: 'https://submarin.online/@taiy',
}, {
  rel: 'me',
  href: 'https://mk.taiy.me/@taiy',
}] as const satisfies React.ComponentProps<'link'>[];
