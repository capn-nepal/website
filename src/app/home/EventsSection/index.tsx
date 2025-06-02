import React from 'react';

import Card from '#components/Card';
import Heading from '#components/Heading';
import presentationImage from '#public/presentation.jpg';

import styles from './styles.module.css';

export default function EventsSection() {
    return (
        <div className={styles.eventsSection}>
            <div className={styles.content}>
                <div className={styles.leftContent}>
                    <Heading
                        className={styles.heading}
                        size="extraLarge"
                    >
                        What’s Next with CAPN:
                        <span> Events, Workshops, and Initiatives</span>
                    </Heading>
                    <Heading
                        className={styles.subHeading}
                        size="medium"
                        font="normal"
                    >
                        CAPN’s upcoming work focuses on community resilience, equity, and progress.
                        Join us in making a difference.
                    </Heading>
                    <Card
                        className={styles.card}
                        date="2025-06-10"
                        title="Launch event of the CAPN's Strategic Goals"
                        description="10:00AM-3:30PM, @CAPN Office, Sanepa"
                        image={presentationImage}
                    />
                </div>
                <div className={styles.rightContent}>
                    <Card
                        className={styles.card}
                        date="2025-06-10"
                        title="Legal Advocacy Seminar"
                        description="10:00AM-3:30PM, @CAPN Office, Sanepa"
                    />
                    <Card
                        className={styles.card}
                        date="2025-06-10"
                        title="Legal Advocacy Seminar"
                        description="10:00AM-3:30PM, @CAPN Office, Sanepa"
                    />
                </div>
            </div>
        </div>
    );
}
