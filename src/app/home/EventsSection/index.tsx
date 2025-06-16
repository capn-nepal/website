import React from 'react';
import { compareDate } from '@togglecorp/fujs';

import Card from '#components/Card';
import Heading from '#components/Heading';
import { type AllDataQuery } from '#generated/types/graphql';
import presentationImage from '#public/presentation.jpg';

import styles from './styles.module.css';

type Events = NonNullable<NonNullable<AllDataQuery['events']>['results']>

interface Props {
    events: Events;
    max?: number;
}

export default function EventsSection(props: Props) {
    const {
        events,
        max,
    } = props;

    const sortedEvents = events.sort((a, b) => compareDate(a.startDate, b.startDate));
    const limitedItems = max ? sortedEvents.slice(0, max) : sortedEvents;
    const firstElement = limitedItems[0];
    const remainingElements = limitedItems.slice(1);

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
                        date={firstElement.startDate}
                        title={firstElement.name}
                        description={firstElement.description}
                        image={presentationImage}
                    />
                </div>
                {remainingElements?.map((item) => (
                    <Card
                        key={item.id}
                        className={styles.card}
                        date={item.startDate}
                        title={item.name}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    );
}
