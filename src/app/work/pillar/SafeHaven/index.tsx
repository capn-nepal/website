import PillarSection from '#components/PillarSection';
import safeHaven from '#public/pillar2.jpg';
import Pillar2 from '#public/pillar2.png';

export default function SafeHaven() {
    return (
        <PillarSection
            heading="Safe Haven"
            imageSrc={safeHaven}
            pillarSrc={Pillar2}
            imageAlt="Safe Haven image"
            quote="Without citizenship, individuals are pushed to the margins of society, unable to lead a dignified and sustainable life."
            attribution=""
            imagePosition="left"
            headingSize="large"
            headingDescription="Safe Haven is a CAPN initiative that empowers individuals affected by lack of citizenship with the skills, knowledge, and resources needed for stable economic opportunities. It addresses barriers to education, healthcare, employment, and legal rights through a holistic approach."
            links={[
                {
                    title: 'Livelihood Support',
                    description: 'Livelihood Support provides affected individuals with practical skills, training, and resources to help them earn a stable income and achieve economic independence. It empowers them to build sustainable future through skill development.',
                },
                {
                    title: 'Psychosocial Support',
                    description: 'Lack of citizenship causes stress and trauma, leading to social exclusion and setbacks. CAPN provides psychosocial support through counseling and referrals to mental health professionals, helping individuals improve their well-being.',
                },
                {
                    title: 'Change of Narrative',
                    description: 'The initiative challenges the view of affected individuals as helpless by highlighting their skills and lack of opportunity. It also exposes how unequal citizenship laws limit many from contributing to Nepal’s economy.',
                },
            ]}
            darkenPillarIcon
        />
    );
}
