import React from 'react';
import { compareDate } from '@togglecorp/fujs';

import Card from '#components/Card';
import Heading from '#components/Heading';
import presentationImage from '#public/presentation.jpg';

import styles from './styles.module.css';

export type EventType = {
    id: string;
    title: string;
    date: string;
    description: string;
    eventDescription: string;
};

interface Props {
    events: EventType[];
    max?: number;
}

export default function EventsSection(props: Props) {
    const {
        events,
        max,
    } = props;

    const sortedEvents = events.sort((a, b) => compareDate(a.date, b.date));
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
                        date={firstElement.date}
                        title={firstElement.title}
                        description={firstElement.description}
                        image={presentationImage}
                    />
                </div>
                {remainingElements?.map((item) => (
                    <Card
                        key={item.id}
                        className={styles.card}
                        date={item.date}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    );
}
