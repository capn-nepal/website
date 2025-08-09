import React from 'react';
import { compareDate } from '@togglecorp/fujs';

import Card from '#components/Card';
import Heading from '#components/Heading';
import Link from '#components/Link';
import Section from '#components/Section';
import data from '#data/staticData.json';
import { type AllDataQuery } from '#generated/types/graphql';

import styles from './styles.module.css';

type Events = NonNullable<NonNullable<AllDataQuery['events']>['results']>;

export default function RecentWorksSection() {
    const allEventsData = (data.events.results ?? []) as unknown as Events;
    const sortedEvents = allEventsData
        .filter((item) => {
            const today = new Date();
            const formatted = today.toISOString().split('T')[0];
            return compareDate(item.endDate, formatted) < 0;
        })
        .sort((a, b) => compareDate(a.startDate, b.startDate));
    const limitedItems = sortedEvents.slice(0, 2);

    if (limitedItems.length <= 0) {
        return null;
    }

    return (
        <Section
            className={styles.recentWorksSection}
            contentClassName={styles.content}
        >
            <div className={styles.topContent}>
                <Heading
                    className={styles.heading}
                    size="extraLarge"
                >
                    Empowering Communities:
                    <br />
                    <span>CAPN&apos;s Recent Works & Events</span>
                </Heading>
                <Link
                    href="/work/events/"
                    variant="button"
                >
                    View all
                </Link>
            </div>
            <div className={styles.bottomContent}>
                {limitedItems?.map((item) => (
                    <Card
                        key={item.id}
                        className={styles.card}
                        date={item.startDate}
                        title={item.name}
                        link={`/work/events/${item.id}/`}
                        image={item.thumbnail?.url}
                        // FIXME: Update image after its coming from backend
                        // image={vocies1Image}
                    />
                ))}
            </div>
        </Section>
    );
}
