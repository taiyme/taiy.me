import { IconChevronRight, IconExternalLink } from '@tabler/icons-react';
import { Link } from 'next-view-transitions';

import { clsx } from '@/utils/clsx';
import { resolveUrl } from '@/utils/resolveUrl';

type LinkCardProps = Readonly<
  & Partial<Pick<React.ComponentProps<typeof Link>, 'href'>>
  & Pick<React.ComponentProps<typeof Link>, 'aria-label'>
  & {
    cardLabel: React.ReactNode;
    cardDescription: React.ReactNode;
    cardTipType?: 'recommended';
  }
>;

export default function LinkCard({ cardLabel, cardDescription, cardTipType, href, ...props }: LinkCardProps) {
  const isExternalUrl = href != null ? resolveUrl(href).isExternalUrl : false;
  const Card = href != null ? Link : 'div';

  return (
    <Card
      {...props}
      href={href!} // eslint-disable-line @typescript-eslint/no-non-null-assertion
      target={isExternalUrl ? '_blank' : undefined}
      rel={isExternalUrl ? 'noopener noreferrer' : undefined}
      className={clsx(`
        group/linkCard
        grid grid-cols-[1fr_auto] grid-rows-[auto_1fr] gap-1
        rounded-2xl border
        px-4 py-2.5
        outline-none
        transition-colors
      `, href != null && `
        hover:border-transparent hover:bg-black/5
        focus-visible:!border-transparent focus-visible:!bg-transparent focus-visible:ring-2
        active:border-transparent active:bg-black/5
      `)}
    >
      <div className='col-span-2 flex flex-wrap items-center gap-x-2'>
        {cardLabel}
        {cardTipType === 'recommended' && (
          <span
            className={clsx(`
              inline-block
              rounded-md
              bg-gradient-to-br from-lime-200 to-red-100
              px-1 py-0.5
              text-xs
              transition-opacity
            `, href != null && `
              group-hover/linkCard:opacity-80
              group-focus-visible/linkCard:!opacity-100
              group-active/linkCard:opacity-80
            `)}
          >
            おすすめ
          </span>
        )}
      </div>
      <div
        className={clsx(`
          text-sm
          text-gray-500
        `, {
          'col-span-2': href == null,
        })}
      >
        {cardDescription}
      </div>
      {href != null && (
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
                group-hover/linkCard:animate-[bounceRight_2s_infinite]
                group-focus-visible/linkCard:animate-[bounceRight_2s_infinite]
                group-active/linkCard:animate-[bounceRight_2s_infinite]
              `)}
            />
          )}
        </div>
      )}
    </Card>
  );
}
