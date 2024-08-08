import LinkText from '@/components/LinkText';
import ASMRAgeBadge from '@/features/ASMRAgeBadge';

type ASMRSectionTitleProps = Readonly<{
  workType: React.ComponentProps<typeof ASMRAgeBadge>['type'];
  workName: string;
  workNumber: string;
}>;

export default function ASMRSectionTitle({ workType, workName, workNumber }: ASMRSectionTitleProps) {
  return (
    <div className='before:font-bold before:content-[counter(asmr-count)_"._"]'>
      <ASMRAgeBadge type={workType} />
      <h3 className='inline font-bold'>
        <LinkText
          sponsored
          href={(
            workType === 'general'
              ? `https://www.dlsite.com/home/dlaf/=/t/n/link/work/aid/taiyme/id/${workNumber}.html`
              : `https://www.dlsite.com/maniax/dlaf/=/t/n/link/work/aid/taiyme/id/${workNumber}.html`
          )}
        >
          {workName}
        </LinkText>
      </h3>
    </div>
  );
}
