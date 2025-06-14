'use client';

import {
    useCallback,
    useState,
} from 'react';
import { _cs } from '@togglecorp/fujs';

import Button from '#components/Button';
import Section from '#components/Section';

import { teamMembers } from '../../../dummyData';
import TeamMemberCard from './TeamMemberCard';

import styles from './styles.module.css';

export default function Boards() {
    const [showMembersSection, setShowMembersSection] = useState<'board' | 'team'>('board');

    const handleBoardMembers = useCallback(() => {
        setShowMembersSection('board');
    }, []);

    const handleTeamMembers = useCallback(() => {
        setShowMembersSection('team');
    }, []);

    const filteredMembers = teamMembers.filter(
        (member) => member.type === showMembersSection,
    );

    return (
        <Section>
            <div className={styles.boards}>
                <div className={styles.buttonGroup}>
                    <Button
                        className={_cs(styles.button, showMembersSection === 'board' && styles.active)}
                        variant="transparent"
                        onClick={handleBoardMembers}
                    >
                        Board Members
                    </Button>
                    <Button
                        className={_cs(styles.button, showMembersSection === 'team' && styles.active)}
                        variant="transparent"
                        onClick={handleTeamMembers}
                    >
                        Team Members
                    </Button>
                </div>
                <div className={styles.membersGrid}>
                    {filteredMembers.map((member) => (
                        <TeamMemberCard
                            key={member.id}
                            showDescription
                            link={`/about/team/${member.id}/`}
                            image={member.image}
                            alt={member.name}
                            name={member.name}
                            designation={member.designation}
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
}
