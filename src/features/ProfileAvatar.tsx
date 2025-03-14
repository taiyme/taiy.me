import NextImage from 'next/image';

import ImagesAvatarsTaiy512 from '@/images/avatars/taiy_512.png';
import { clsx } from '@/utils/clsx';

export default function ProfileAvatar() {
  return (
    <div
      className={clsx(`
        aspect-square
        size-48
        select-none
        overflow-clip
        rounded-full
        shadow-xl
        [view-transition-name:profile-avatar]
        @md/profile:size-56
      `)}
    >
      <picture>
        <NextImage
          src={ImagesAvatarsTaiy512}
          alt='taiyのアイコン'
          priority={true}
          className='pointer-events-none size-full select-none'
        />
      </picture>
    </div>
  );
}
