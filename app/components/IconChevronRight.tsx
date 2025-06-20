// SPDX-FileCopyrightText: 2020-2024 Paweł Kuna
// SPDX-License-Identifier: MIT

import type { Icon } from '@/types/Icon';

type Props = Readonly<
  Icon
>;

export default function IconChevronRight({ class: classes }: Props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
      role='img'
      aria-hidden='true'
      class={classes}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M9 6l6 6l-6 6' />
    </svg>
  );
}
