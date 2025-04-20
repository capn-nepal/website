import React from 'react';

import Button from '#components/Button';
import Card from '#components/Card';
import Heading from '#components/Heading';
import testImage from '#public/image1.png';

import styles from './styles.module.css';

export default function RecentWorksSection() {
    return (
        <div className={styles.recentWorksSection}>
            <div className={styles.content}>
                <div className={styles.topContent}>
                    <Heading
                        className={styles.heading}
                        size="extraLarge"
                    >
                        Empowering Communities:
                        <br />
                        <span>CAPN's Recent Works & Events</span>
                    </Heading>
                    <Button>
                        View all
                    </Button>
                </div>
                <div className={styles.bottomContent}>
                    <Card
                        className={styles.card}
                        date="2025-04-22"
                        title="Launch event of the CAPN's Strategic Goals"
                        description="10:00AM, @CAPN Office, Sanepa"
                        image={testImage}
                    />
                    <Card
                        className={styles.card}
                        date="2025-04-22"
                        title="Launch event of the CAPN's Strategic Goals"
                        description="10:00AM, @CAPN Office, Sanepa"
                        image={testImage}
                    />
                </div>
            </div>
        </div>
    );
}
