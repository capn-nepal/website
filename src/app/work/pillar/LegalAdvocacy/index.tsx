import Advocacy from '#public/advocacy.jpg';

import PillarSection from '../PillarSection';

export default function LegalAdvocacy() {
    return (
        <PillarSection
            heading="Legal Advocacy"
            imageSrc={Advocacy}
            imageAlt="Legal Advocacy image"
            quote="CAPN engages with government and key stakeholders to advocate for gender-equal citizenship laws in Nepal. It supports both policy-level reform and individuals affected by discriminatory laws through legal aid and casework."
            attribution="DEEPTI GURUNG"
            headingDescription="CAPN engages with government and key stakeholders to advocate for gender-equal citizenship laws in Nepal. It supports both policy-level reform and individuals affected by discriminatory laws through legal aid and casework."
            imagePosition="right"
            links={[
                {
                    title: 'Policy & Legislative Advocacy',
                    // TODO: Add links
                    href: '#',
                    description:
                        'Engaging lawmakers, CSOs, and experts to reform discriminatory citizenship laws.',
                },
                {
                    title: 'Evidence-Based Research',
                    href: '#',
                    description:
                        'Using data and lived experiences to support legal reform and awareness efforts.',
                },
                {
                    title: 'Individual Case Support',
                    href: '#',
                    description:
                        'Providing legal aid and documentation support to those denied citizenship.',
                },
            ]}
        />
    );
}
