import React from 'react';
import { compareDate } from '@togglecorp/fujs';

import Card from '#components/Card';
import Heading from '#components/Heading';
import data from '#data/staticData.json';
import { type AllDataQuery } from '#generated/types/graphql';

import styles from './styles.module.css';

type Events = NonNullable<NonNullable<AllDataQuery['events']>['results']>

interface Props {
    max?: number;
}

export default function EventsSection(props: Props) {
    const {
        max,
    } = props;

    const events = (data.events.results ?? []) as unknown as Events;
    const sortedEvents = events
        .filter((item) => {
            const today = new Date();
            const formatted = today.toISOString().split('T')[0];
            return compareDate(item.endDate, formatted) >= 0;
        })
        .sort((a, b) => compareDate(a.startDate, b.startDate));

    const limitedItems = max ? sortedEvents.slice(0, max) : sortedEvents;
    const firstElement = limitedItems[0];
    const remainingElements = limitedItems.slice(1);

    if (limitedItems.length <= 0) {
        return null;
    }

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
                        date={firstElement?.startDate}
                        title={firstElement?.name}
                        link={`/work/events/${firstElement.id}`}
                        // FIXME: Send image from backend
                        // image={firstElement?.image}
                    />
                </div>
                {remainingElements?.map((item) => (
                    <Card
                        key={item.id}
                        className={styles.card}
                        date={item.startDate}
                        title={item.name}
                        link={`/work/events/${item.id}`}
                    />
                ))}
            </div>
        </div>
    );
}
