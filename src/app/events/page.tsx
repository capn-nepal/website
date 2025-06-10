import React from 'react';

import Banner from '#components/Banner';
import Card from '#components/Card';
import Page from '#components/Page';
import Section from '#components/Section';
import AboutUsImage from '#public/aboutUsImage.jpg';

import { events } from '../dummyData';
import EventsSection from '../home/EventsSection';

import styles from './page.module.css';

export default function Events() {
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
            <EventsSection
                events={events}
            />
            <Section
                heading="CAPN's Recent Works & Events"
                headingSize="extraLarge"
            >
                <div className={styles.pastEvents}>
                    {events?.map((item) => (
                        <Card
                            key={item.id}
                            className={styles.card}
                            image={AboutUsImage}
                            title={item.title}
                            date={item.date}
                            description={item.description}
                            link={`/events/${item.id}`}
                        />
                    ))}
                </div>
            </Section>
        </Page>
    );
}
