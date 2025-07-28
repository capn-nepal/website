'use client';

import {
    useCallback,
    useState,
} from 'react';
import { _cs } from '@togglecorp/fujs';

import Button from '#components/Button';
import Section from '#components/Section';
import data from '#data/staticData.json';
import { type AllDataQuery } from '#generated/types/graphql';

import TeamMemberCard from './TeamMemberCard';

import styles from './styles.module.css';

type Members = NonNullable<NonNullable<AllDataQuery['teamMembers']>['results']>;

export default function Boards() {
    const [showMembersSection, setShowMembersSection] = useState<'Board Member' | 'Team Member'>('Board Member');
    const allTeamMembersData = data.teamMembers.results as unknown as Members;

    const handleBoardMembers = useCallback(() => {
        setShowMembersSection('Board Member');
    }, []);

    const handleTeamMembers = useCallback(() => {
        setShowMembersSection('Team Member');
    }, []);

    const filteredMembers = allTeamMembersData.filter(
        (member) => member.memberType === showMembersSection,
    );

    return (
        <Section>
            <div className={styles.boards}>
                <div className={styles.buttonGroup}>
                    <Button
                        className={_cs(styles.button, showMembersSection === 'Board Member' && styles.active)}
                        variant="transparent"
                        onClick={handleBoardMembers}
                    >
                        Board Members
                    </Button>
                    <Button
                        className={_cs(styles.button, showMembersSection === 'Team Member' && styles.active)}
                        variant="transparent"
                        onClick={handleTeamMembers}
                    >
                        Team Members
                    </Button>
                </div>
                <div className={styles.membersGrid}>
                    {filteredMembers.map((member) => (
                        member.memberPhoto ? (
                            <TeamMemberCard
                                key={member.id}
                                showDescription
                                link={`/about/team/${member.id}/`}
                                image={member.memberPhoto?.url}
                                alt={member.memberPhoto?.name}
                                name={member.firstName}
                                designation={member.designation}
                                instagramLink={member.instagramLink ?? undefined}
                                linkedInlink={member.linkedinLink ?? undefined}
                            />
                        ) : null
                    ))}
                </div>
            </div>
        </Section>
    );
}
