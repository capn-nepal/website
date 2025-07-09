import React from 'react';

import Divider from '#components/Divider';
import Heading from '#components/Heading';
import Link from '#components/Link';
import Page from '#components/Page';
import Section from '#components/Section';

import Community from './home/Community';
import EventsSection from './home/EventsSection';
import HomeBanner from './home/HomeBanner';
import PillarsSection from './home/PillarsSection';
import RecentWorksSection from './home/RecentWorksSection';
import Reports from './home/Reports';
import Studio from './home/Studio';
import Voices from './home/Voices';

import styles from './page.module.css';

export default function Home() {
    return (
        <Page contentClassName={styles.page}>
            <HomeBanner />
            <Section
                className={styles.definition}
                contentClassName={styles.definitionSection}
            >
                <Heading
                    className={styles.definitionHeading}
                    size="large"
                >
                    We are the Citizenship Affected People&apos;s Network (CAPN), a
                    civil society organization advocating for
                    <span> gender-equal and inclusive citizenship rights </span>
                    in Nepal.
                </Heading>
                <Link
                    href="/about/approach/"
                    showIcon
                >
                    Get to know us better
                </Link>
            </Section>
            <EventsSection
                max={3}
            />
            <Divider />
            <RecentWorksSection />
            <PillarsSection />
            <Community />
            <Divider />
            <Voices />
            <Reports />
            <Studio />
        </Page>
    );
}
