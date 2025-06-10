import Advocacy from '#public/advocacy.jpg';
import Pillar2 from '#public/pillar2.png';

import PillarSection from '../PillarSection';

export default function SafeHaven() {
    return (
        <PillarSection
            heading="Safe Haven"
            // TODO: Add the real image from figma
            imageSrc={Advocacy}
            pillarSrc={Pillar2}
            imageAlt="Safe Haven image"
            quote="Without citizenship, access to education, work, and healthcare becomes a distant dream. Safe Haven gives us tools to survive—and thrive."
            attribution="Participant, Kuala Lumpur Showcase"
            imagePosition="left"
            headingSize="large"
            headingDescription="Safe Haven initiative empowers individuals affected by lack of citizenship with skills, support, and resources to build self-reliant lives. By addressing both the legal and socio-economic barriers they face, Safe Haven helps individuals reclaim their agency, dignity, and place in society."
            links={[
                {
                    title: 'Skills Training & Livelihood Support',
                    // TODO: Add links
                    href: '',
                    description:
                        'Practical skills and income-generating opportunities to promote economic independence.',
                },
                {
                    title: 'Psychosocial Support',
                    href: '',
                    description:
                        'Emotional and mental health support for individuals affected by systemic exclusion.',
                },
                {
                    title: 'Community Showcases',
                    href: '',
                    description:
                        'Platforms to display and sell products by impacted individuals, building visibility and pride.',
                },
            ]}
        />
    );
}
