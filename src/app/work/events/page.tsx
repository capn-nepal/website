import React from 'react';

import Banner from '#components/Banner';
import Card from '#components/Card';
import Page from '#components/Page';
import Section from '#components/Section';
import data from '#data/staticData.json';
import { type AllDataQuery } from '#generated/types/graphql';
import AboutUsImage from '#public/aboutUsImage.jpg';

import EventsSection from '../../home/EventsSection';

import styles from './page.module.css';

type Events = NonNullable<NonNullable<AllDataQuery['events']>['results']>;

export default function Events() {
    const allEventsData = data.events.results as unknown as Events;
    return (
        <Page contentClassName={styles.events}>
            <Banner
                // NOTE: We need to replace with the real image as mentioned in figma
                bannerImageSrc={AboutUsImage}
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
                            image={AboutUsImage}
                            title={item.name}
                            date={item.startDate}
                            description={item.description}
                            link={`/work/events/${item.id}`}
                        />
                    ))}
                </div>
            </Section>
        </Page>
    );
}
