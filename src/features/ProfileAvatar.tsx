import { profileAvatar } from '@/constants/profile';
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
        @md/profile:size-56
      `)}
    >
      <picture>
        <img
          src={profileAvatar}
          alt='taiyのアイコン'
          width={224}
          height={224}
          loading='eager'
          className={clsx(`
            pointer-events-none
            size-full
            select-none
          `)}
        />
      </picture>
    </div>
  );
}
