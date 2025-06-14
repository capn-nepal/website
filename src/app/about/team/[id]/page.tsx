import { isNotDefined } from '@togglecorp/fujs';

import Heading from '#components/Heading';
import Link from '#components/Link';
import Page from '#components/Page';
import Section from '#components/Section';

import { teamMembers as staticMembers } from '../../../dummyData';
import TeamMemberCard from '../Boards/TeamMemberCard';

import styles from './page.module.css';

async function getMembers() {
    return staticMembers;
}

export async function generateStaticParams() {
    const members = await getMembers();
    return members.map((item) => ({ id: item.id }));
}

type PageProps = {
    params: Promise<{
        id: string;
    }>;
};

export default async function TeamDetailPage({ params }: PageProps) {
    const members = await getMembers();
    const {
        id,
    } = await params;

    const memberDetails = members?.find((item) => item.id === id);

    if (isNotDefined(memberDetails)) {
        return null;
    }

    return (
        <Page>
            <Section
                className={styles.memberWrapper}
                contentClassName={styles.memberContent}
            >
                <TeamMemberCard
                    image={memberDetails?.image}
                    alt={memberDetails.name}
                />
                <div className={styles.memberDescription}>
                    <div>
                        <Heading>
                            {memberDetails.name}
                        </Heading>
                        <Heading font="normal" size="extraSmall">
                            {memberDetails.designation}
                        </Heading>
                    </div>
                    {memberDetails.profileDescription}
                    <Link
                        href="/about/team"
                    >
                        BACK TO TEAM
                    </Link>
                </div>
            </Section>
        </Page>
    );
}
