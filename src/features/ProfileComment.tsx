'use client';

import { atom, useAtom } from 'jotai';
import { useCallback, useMemo } from 'react';

import { commentList, defaultComment } from '@/constants/commentList';
import { clsx } from '@/utils/clsx';
import { filterClickLikeEvent } from '@/utils/filterClickLikeEvent';
import { sleep } from '@/utils/sleep';

const countAtom = atom(0);
const waitAtom = atom(false);
const hideAtom = atom(false);

export default function ProfileComment() {
  const [count, setCount] = useAtom(countAtom);
  const [wait, setWait] = useAtom(waitAtom);
  const [hide, setHide] = useAtom(hideAtom);

  const comment = useMemo(() => commentList.at(count) ?? defaultComment, [count]);

  const onEvent = useCallback(async (ev: React.MouseEvent | React.KeyboardEvent) => {
    if (!filterClickLikeEvent(ev)) return;
    ev.preventDefault();
    if (wait) return;
    setWait(true);
    setHide(true);
    await sleep(150);
    setCount((prev) => (prev + 1) % commentList.length);

    await sleep(100);
    setHide(false);
    await sleep(500);
    setWait(false);
  }, [setCount, setHide, setWait, wait]);

  return (
    <div
      role='button'
      tabIndex={0}
      onClick={onEvent}
      onKeyDown={onEvent}
      className={clsx(`
        select-none
        rounded-[2px]
        px-1
        outline-none
        transition-opacity
        focus-visible:ring-2
        @md/profile:text-lg
      `, {
        'cursor-pointer': !hide,
        'cursor-wait': hide,
        'opacity-0': hide,
      })}
    >
      <span className='text-gray-500'>{comment}</span>
    </div>
  );
}
