import React from 'react';
import { _cs } from '@togglecorp/fujs';
import Image from 'next/image';

import Heading from '#components/Heading';
import Link from '#components/Link';
import pillar from '#public/pillar.svg';
import pillar1 from '#public/pillar1.jpg';
import pillar2 from '#public/pillar2.jpg';
import pillar3 from '#public/pillar3.jpg';

import styles from './styles.module.css';

const legalAdvocacy = 'CAPN engages with government and key stakeholders to advocate for gender-equal citizenship laws in Nepal. It supports both policy-level reform and individuals affected by discriminatory laws through legal aid and casework.';
const safeHaven = 'CAPN engages with government and key stakeholders to advocate for gender-equal citizenship laws in Nepal. It supports both policy-level reform and individuals affected by discriminatory laws through legal aid and casework.';
const socialAwareness = 'CAPN engages with government and key stakeholders to advocate for gender-equal citizenship laws in Nepal. It supports both policy-level reform and individuals affected by discriminatory laws through legal aid and casework.';

export default function PillarsSection() {
    return (
        <div className={styles.pillarsSection}>
            <div className={styles.content}>
                <Heading
                    className={styles.heading}
                    size="extraLarge"
                >
                    CAPN’S Three Pillars for Citizenship Justice
                </Heading>
                <div className={styles.pillarsContainer}>
                    <div className={styles.pillarContainer}>
                        <div className={styles.leftContainer}>
                            <div className={styles.headingContainer}>
                                <div className={styles.number}>
                                    01
                                </div>
                                <Heading
                                    className={styles.title}
                                    size="large"
                                >
                                    Legal Advocacy
                                </Heading>
                            </div>
                            <div className={styles.description}>
                                {legalAdvocacy}
                            </div>
                            <Link
                                href="/"
                                showIcon
                            >
                                Learn More
                            </Link>
                        </div>
                        <div className={styles.rightContainer}>
                            <Image
                                className={styles.pillarsImage}
                                src={pillar}
                                alt="legal-advocacy"
                            />
                            <Image
                                className={styles.image}
                                src={pillar1}
                                alt="legal-advocacy"
                            />
                        </div>
                    </div>
                    <div className={_cs(styles.pillarContainer, styles.second)}>
                        <div className={styles.leftContainer}>
                            <div className={styles.headingContainer}>
                                <div className={styles.number}>
                                    02
                                </div>
                                <Heading
                                    className={styles.title}
                                    size="large"
                                >
                                    Safe Haven
                                </Heading>
                            </div>
                            <div className={styles.description}>
                                {safeHaven}
                            </div>
                            <Link
                                href="/"
                                showIcon
                            >
                                Learn More
                            </Link>
                        </div>
                        <div className={styles.rightContainer}>
                            <Image
                                className={styles.pillarsImage}
                                src={pillar}
                                alt="pillar"
                            />
                            <Image
                                className={styles.image}
                                src={pillar2}
                                alt="safe-haven"
                            />
                        </div>
                    </div>
                    <div className={styles.pillarContainer}>
                        <div className={styles.leftContainer}>
                            <div className={styles.headingContainer}>
                                <div className={styles.number}>
                                    03
                                </div>
                                <Heading
                                    className={styles.title}
                                    size="large"
                                >
                                    Social Awareness
                                </Heading>
                            </div>
                            <div className={styles.description}>
                                {socialAwareness}
                            </div>
                            <Link
                                href="/"
                                showIcon
                            >
                                Learn More
                            </Link>
                        </div>
                        <div className={styles.rightContainer}>
                            <Image
                                className={styles.pillarsImage}
                                src={pillar}
                                alt="pillar"
                            />
                            <Image
                                className={styles.image}
                                src={pillar3}
                                alt="social-awareness"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
