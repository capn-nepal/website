import React from 'react';

import Heading from '#components/Heading';
import Link from '#components/Link';
import PillarSection from '#components/PillarSection';
import Advocacy from '#public/advocacy.jpg';
import pillar1 from '#public/pillar1.png';
import SafeHaven from '#public/pillar2.jpg';
import pillar2 from '#public/pillar2.png';
import SocialAwareness from '#public/pillar3.jpg';
import pillar3 from '#public/pillar3.png';

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
                    <PillarSection
                        className={styles.pillarContent}
                        headingClassName={styles.pillarHeading}
                        heading="Legal Advocacy"
                        headingDescription={legalAdvocacy}
                        imagePosition="right"
                        pillarSrc={pillar1}
                        imageSrc={Advocacy}
                        imageAlt="Legal Advocacy image"
                        attribution={(
                            <Link
                                href="/work/link"
                                showIcon
                            >
                                Learn More
                            </Link>
                        )}
                    />
                    <PillarSection
                        className={styles.pillarContent}
                        headingClassName={styles.pillarHeading}
                        heading="Safe Haven"
                        headingDescription={safeHaven}
                        imagePosition="left"
                        pillarSrc={pillar2}
                        imageSrc={SafeHaven}
                        imageAlt="Safe Haven"
                        attribution={(
                            <Link
                                href="/work/link"
                                showIcon
                            >
                                Learn More
                            </Link>
                        )}
                    />
                    <PillarSection
                        className={styles.pillarContent}
                        headingClassName={styles.pillarHeading}
                        heading="Social Awarness"
                        headingDescription={socialAwareness}
                        imagePosition="right"
                        pillarSrc={pillar3}
                        imageSrc={SocialAwareness}
                        imageAlt="Safe Haven"
                        attribution={(
                            <Link
                                href="/work/link"
                                showIcon
                            >
                                Learn More
                            </Link>
                        )}
                    />
                </div>
            </div>
        </div>
    );
}
