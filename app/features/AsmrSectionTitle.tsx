import LinkText from '@/components/LinkText';
import AsmrAgeBadge from '@/features/AsmrAgeBadge';
import { generateDlafLink } from '@/utils/generateDlafLink';

type Props = Readonly<{
  workType: 'general' | 'teen' | 'adult';
  workName: string;
  workNumber: string;
}>;

export default function AsmrSectionTitle({ workType, workName, workNumber }: Props) {
  const href = generateDlafLink({
    productId: workNumber,
    salesArea: workType === 'general' ? 'home' : 'maniax',
  });

  return (
    <div class='before:font-bold before:content-[counter(asmr-count)_"._"]'>
      <AsmrAgeBadge type={workType} />
      <h3 class='inline font-bold'>
        <LinkText
          href={href}
          external
          sponsored
        >
          {workName}
        </LinkText>
      </h3>
    </div>
  );
}
