import React from 'react';

import Heading from '#components/Heading';
import Link from '#components/Link';
import PillarSection from '#components/PillarSection';
import Section from '#components/Section';
import Advocacy from '#public/advocacy.jpg';
import pillar1 from '#public/pillar1.png';
import SafeHaven from '#public/pillar2.jpg';
import pillar2 from '#public/pillar2.png';
import SocialAwareness from '#public/pillar3.jpg';
import pillar3 from '#public/pillar3.png';

import styles from './styles.module.css';

const legalAdvocacy = 'CAPN works to reform discriminatory nationality laws by engaging in policy dialogues, lobbying, and legal consultations. Through collaboration with lawmakers, civil society, and legal experts, CAPN advocates for gender-equal citizenship rights in Nepal.';
const safeHaven = 'Safe Haven is a CAPN initiative that empowers impacted individuals with skills, knowledge, and resources to access stable economic opportunities, addressing barriers caused by lack of citizenship.';
const socialAwareness = 'CAPN aims to educate and aware individuals about these myths and mainstream the public discourse on citizenship. CAPN also shares research-based information and data to the public, raising awareness about key issues and recent findings related to citizenship.';

export default function PillarsSection() {
    return (
        <Section
            className={styles.pillarsSection}
            contentClassName={styles.content}
        >
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
                            className={styles.link}
                            href="/work/pillar/"
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
                            className={styles.link}
                            href="/work/pillar/"
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
                            className={styles.link}
                            href="/work/pillar/"
                            showIcon
                        >
                            Learn More
                        </Link>
                    )}
                />
            </div>
        </Section>
    );
}
