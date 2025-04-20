import React from 'react';

import Divider from '#components/Divider';
import Heading from '#components/Heading';
import Link from '#components/Link';
import Page from '#components/Page';

import Banner from './HomePage/Banner';
import Community from './HomePage/Community';
import EventsSection from './HomePage/EventsSection';
import PillarsSection from './HomePage/PillarsSection';
import RecentWorksSection from './HomePage/RecentWorksSection';
import Reports from './HomePage/Reports';
import SmallJourney from './HomePage/SmallJourney';
import Studio from './HomePage/Studio';
import Voices from './HomePage/Voices';

import styles from './page.module.css';

export default function Home() {
    return (
        <Page contentClassName={styles.page}>
            <Banner />
            <section className={styles.definition}>
                <Heading
                    className={styles.definitionHeading}
                    size="large"
                >
                    We are the Citizenship Affected People's Network (CAPN), a
                    civil society organization advocating for
                    <span> gender-equal and inclusive citizenship rights </span>
                    in Nepal.
                </Heading>
                <Link
                    href="/explore"
                    showIcon
                >
                    Get to know us better
                </Link>
            </section>
            <EventsSection />
            <Divider />
            <RecentWorksSection />
            <Divider />
            <PillarsSection />
            <Divider />
            <SmallJourney />
            <Divider />
            <Community />
            <Divider />
            <Voices />
            <Reports />
            <Studio />
        </Page>
    );
}
