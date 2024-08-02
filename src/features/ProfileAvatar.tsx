'use client';

import { atom, useAtom } from 'jotai';
import { useCallback, useMemo } from 'react';

import { avatarList, defaultAvatar } from '@/constants/avatarList';
import { clsx } from '@/utils/clsx';
import { filterClickLikeEvent } from '@/utils/filterClickLikeEvent';
import { sleep } from '@/utils/sleep';

const countAtom = atom(0);
const waitAtom = atom(false);
const hideAtom = atom(false);

export default function ProfileAvatar() {
  const [count, setCount] = useAtom(countAtom);
  const [wait, setWait] = useAtom(waitAtom);
  const [hide, setHide] = useAtom(hideAtom);

  const avatar = useMemo(() => avatarList.at(count) ?? defaultAvatar, [count]);

  const onEvent = useCallback(async (ev: React.MouseEvent | React.KeyboardEvent) => {
    if (!filterClickLikeEvent(ev)) return;
    ev.preventDefault();
    if (wait) return;
    setWait(true);
    setHide(true);
    await sleep(150);
    setCount((prev) => (prev + 1) % avatarList.length);
  }, [setCount, setHide, setWait, wait]);

  const onLoad = useCallback(async () => {
    if (!hide) return;
    await sleep(100);
    setHide(false);
    await sleep(500);
    setWait(false);
  }, [hide, setHide, setWait]);

  return (
    <div
      role='button'
      tabIndex={0}
      onClick={onEvent}
      onKeyDown={onEvent}
      className={clsx(`
        aspect-square
        size-48
        select-none
        overflow-clip
        rounded-full
        shadow-xl
        outline-none
        transition-opacity
        focus-visible:ring-2
        @md/profile:size-56
      `, {
        'cursor-pointer': !hide,
        'cursor-wait': hide,
        'opacity-0': hide,
      })}
    >
      <picture>
        <img
          src={avatar}
          alt='taiyのアイコン'
          width={224}
          height={224}
          onLoad={onLoad}
          loading='lazy'
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
