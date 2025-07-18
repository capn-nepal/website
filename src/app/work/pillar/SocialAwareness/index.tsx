import AdvocacySection from '#components/PillarSection';
import social from '#public/pillar3.jpg';
import Pillar3 from '#public/pillar3.png';

export default function SocialAwareness() {
    return (
        <AdvocacySection
            heading="Social Awareness"
            // TODO: Add real image form the figma
            imageSrc={social}
            pillarSrc={Pillar3}
            imageAlt="Social Awareness image"
            quote="Awareness of required documentation and the citizenship acquisition process can lead to a smoother acquisition process."
            attribution=""
            imagePosition="right"
            headingDescription="Social awareness is a very integral part to promote equal access to citizenship for all. While it is believed that citizenship issues have already been resolved, individuals continue to face legal and procedural difficulties to acquire citizenship. CAPN aims to educate and aware individuals about these myths and mainstream the public discourse on citizenship. CAPN also shares research-based information and data to the public, raising awareness about key issues and recent findings related to citizenship. Through initiatives like Vox Pop, podcasts, multimedia engagement, myth-busting campaigns and School Outreach Programs, CAPN aims to  empower individuals with accurate information, amplify diverse voices and promote understanding."
            links={[
                {
                    title: 'School Outreach Program',
                    description: 'The School Outreach Program educates students about birth registration and citizenship, teaching them early about legal identity and its impact on their future opportunities.',
                },
                {
                    title: 'Myth Busting Campaigns',
                    description: 'CAPN runs myth-busting campaigns to clear up misinformation about citizenship laws. Using multimedia, these efforts provide accurate, easy-to-understand information that helps the public and reduces confusion.',
                },
                {
                    title: 'Awareness Raising',
                    description: 'CAPN raises public awareness through videos, podcasts, outreach materials, and events. Its visual podcast “State of Statelessness” shares personal stories and expert insights to promote gender equality in citizenship laws.',
                },
            ]}
            darkenPillarIcon
        />
    );
}
