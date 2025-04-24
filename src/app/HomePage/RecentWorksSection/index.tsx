import React from 'react';

import Button from '#components/Button';
import Card from '#components/Card';
import Heading from '#components/Heading';
import vocies1Image from '#public/voices1.jpg';
import vocies2Image from '#public/voices2.jpg';

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
                        <span>CAPN&apos;s Recent Works & Events</span>
                    </Heading>
                    <Button>
                        View all
                    </Button>
                </div>
                <div className={styles.bottomContent}>
                    <Card
                        className={styles.card}
                        date="2025-08-10"
                        title="Study on Implementation of citizenship laws in Nepal"
                        image={vocies1Image}
                    />
                    <Card
                        className={styles.card}
                        date="2025-08-10"
                        title="Paralegal Program"
                        image={vocies2Image}
                    />
                </div>
            </div>
        </div>
    );
}
