import PillarSection from '#components/PillarSection';
import Advocacy from '#public/advocacy.jpg';
import Pillar1 from '#public/pillar1.png';

export default function LegalAdvocacy() {
    return (
        <PillarSection
            heading="Legal Advocacy"
            imageSrc={Advocacy}
            imageAlt="Legal Advocacy image"
            pillarSrc={Pillar1}
            quote="Although notable achievements have been made towards inclusivity in nationality laws. Gender equality in every aspect of citizenship laws is yet to be ensured."
            attribution=""
            headingDescription="CAPN has been active in legal advocacy for gender equal nationality rights in Nepal. It started as a loose network of affected individuals in 2015 and till date, CAPN has been involved in legal advocacy through policy roundtables, lobbying and discussions with lawmakers, Civil Society Organization (CSO) members, legal experts and government stakeholders. Thus, CAPN’s legal advocacy efforts are backed by evidence-based advocacy, lobbying with policy makers, research and legal assistance through paralegals."
            imagePosition="right"
            links={[
                {
                    title: 'Evidence Based Advocacy',
                    // TODO: Add links
                    href: '#',
                    description: 'Research helps CAPN support gender-equal citizenship. Recent studies looked at how new citizenship laws are applied and how COVID-19 affected people without citizenship.',
                },
                {
                    title: 'Grassroot Advocacy',
                    href: '#',
                    description: 'Paralegal Program expands CAPN’s legal support by training affected individuals to help others navigate the citizenship process. These paralegals offer free, personalized assistance and gain a means to support their own livelihood.',
                },
                {
                    title: 'National & International Efforts',
                    href: '#',
                    description: 'CAPN advocates for gender-equal citizenship by engaging with policymakers and pushing for legal reforms. It also contributes to global forums like CEDAW, CRC, and UPR, sharing research and lived experiences to influence change.',
                },
            ]}
            darkenPillarIcon
        />
    );
}
