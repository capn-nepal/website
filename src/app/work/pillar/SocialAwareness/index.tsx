import Advocacy from '#public/advocacy.jpg';

import AdvocacySection from '../PillarSection';

export default function SocialAwareness() {
    return (
        <AdvocacySection
            heading="Social Awareness"
            // TODO: Add real image form the figma
            imageSrc={Advocacy}
            imageAlt="Social Awareness image"
            quote="CAPN’s awareness campaigns don’t just educate—they build solidarity. They remind us that behind every policy, there are real lives and stories."
            attribution="Gender Rights Advocate"
            imagePosition="right"
            headingDescription="CAPN drives public awareness to challenge misconceptions, inform communities, and amplify voices of those impacted by Nepal’s gender-unequal citizenship laws. Through creative media, research, and education, we spark national conversations and empower people with the truth."
            links={[
                {
                    title: 'Public Education & Outreach',
                    // TODO: Add links
                    href: '',
                    description:
                        'Awareness through school programs, community sessions, and resource sharing',
                },
                {
                    title: 'Multimedia Campaigns',
                    href: '',
                    description:
                        'Podcasts, Vox Pops, and visual storytelling to humanize the issue and debunk myths. ',
                },
                {
                    title: 'Research & Data Sharing',
                    href: '',
                    description:
                        'Evidence-based insights that inform the public and shape advocacy efforts.',
                },
            ]}
        />
    );
}
