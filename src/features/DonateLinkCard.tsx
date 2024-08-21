import { IconChevronRight, IconExternalLink } from '@tabler/icons-react';
import { Link } from 'next-view-transitions';

import type DonateCard from '@/features/DonateCard';
import { clsx } from '@/utils/clsx';
import { generateAnchorProps, type LinkBaseProps } from '@/utils/generateAnchorProps';

type DonateLinkCardProps = Readonly<
  & React.ComponentProps<typeof DonateCard>
  & Omit<LinkBaseProps, 'children'>
>;

export default function DonateLinkCard({ label, description, recommended, ...props }: DonateLinkCardProps) {
  const { anchorProps, isExternalUrl } = generateAnchorProps(props);

  return (
    <Link
      {...anchorProps}
      className={clsx(`
        group/donateCard
        grid grid-cols-[1fr_auto] grid-rows-[auto_1fr] gap-1
        rounded-2xl border
        px-4 py-2.5
        outline-none outline-0
        transition-colors
        hover:border-transparent hover:bg-black/5
        focus-visible:!border-transparent focus-visible:!bg-transparent focus-visible:outline-2 focus-visible:ring-2
        active:border-transparent active:bg-black/5
      `)}
    >
      <div className='col-span-2 flex flex-wrap items-center gap-x-2'>
        {label}
        {recommended && (
          <span
            className={clsx(`
              inline-block
              rounded-md
              bg-gradient-to-br from-lime-200 to-red-100
              px-1 py-0.5
              text-xs
              transition-opacity
              group-hover/donateCard:opacity-80
              group-focus-visible/donateCard:!opacity-100
              group-active/donateCard:opacity-80
            `)}
          >
            おすすめ
          </span>
        )}
      </div>
      <div className='text-sm text-gray-500'>
        {description}
      </div>
      <div className='flex items-end'>
        {isExternalUrl ? (
          <IconExternalLink
            role='img'
            aria-hidden='true'
            className={clsx(`
              size-[1.2em]
              text-gray-500 opacity-80
            `)}
          />
        ) : (
          <IconChevronRight
            role='img'
            aria-hidden='true'
            className={clsx(`
              size-[1.2em]
              text-gray-500 opacity-80
              group-hover/donateCard:animate-[bounceRight_2s_infinite]
              group-focus-visible/donateCard:animate-[bounceRight_2s_infinite]
              group-active/donateCard:animate-[bounceRight_2s_infinite]
            `)}
          />
        )}
      </div>
    </Link>
  );
}
