import React from 'react';

import Banner from '#components/Banner';
import Card from '#components/Card';
import Page from '#components/Page';
import Section from '#components/Section';
import data from '#data/staticData.json';
import { type AllDataQuery } from '#generated/types/graphql';
import eventImage from '#public/eventImage.jpg';

import EventsSection from '../../home/EventsSection';

import styles from './page.module.css';

type Events = NonNullable<NonNullable<AllDataQuery['events']>['results']>;

export default function Events() {
    const allEventsData = data.events.results as unknown as Events;

    return (
        <Page contentClassName={styles.events}>
            <Banner
                bannerImageSrc={eventImage}
                eyebrowHeading="Our Events"
                heading={(
                    <>
                        Foundations of Our Advocacy
                        <br />
                        <span>Our Events</span>
                    </>
                )}
            />
            <EventsSection />
            <Section
                heading="CAPN's Recent Works & Events"
                headingSize="extraLarge"
            >
                <div className={styles.pastEvents}>
                    {allEventsData?.map((item) => (
                        <Card
                            key={item.id}
                            className={styles.card}
                            title={item.name}
                            date={item.startDate}
                            link={`/work/events/${item.id}/`}
                            image={item.thumbnail?.url}
                        />
                    ))}
                </div>
            </Section>
        </Page>
    );
}
