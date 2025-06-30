import {
    isDefined,
    isNotDefined,
} from '@togglecorp/fujs';

import Heading from '#components/Heading';
import Link from '#components/Link';
import Page from '#components/Page';
import Section from '#components/Section';
import data from '#data/staticData.json';
import { type AllDataQuery } from '#generated/types/graphql';

import TeamMemberCard from '../Boards/TeamMemberCard';

import styles from './page.module.css';

type Members = NonNullable<NonNullable<AllDataQuery['teamMembers']>['results']>;
async function getMembers() {
    return data.teamMembers.results as unknown as Members;
}

/* eslint-disable react-refresh/only-export-components */
export async function generateStaticParams() {
    const members = await getMembers();
    if (!members.length) {
        return [{ id: 'empty' }];
    }
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
                {isDefined(memberDetails.memberPhoto)
                    && (
                        <TeamMemberCard
                            image={memberDetails?.memberPhoto.url}
                            alt={memberDetails?.memberPhoto.name}
                        />
                    )}
                <div className={styles.memberDescription}>
                    <div>
                        <Heading>
                            {`${memberDetails.firstName} ${memberDetails.middleName} ${memberDetails.lastName}`}
                        </Heading>
                        <Heading font="normal" size="extraSmall">
                            {memberDetails.designation}
                        </Heading>
                    </div>
                    {/* {memberDetails.profileDescription} */}
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
