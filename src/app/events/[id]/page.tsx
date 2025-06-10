import React from 'react';

import ArticleBody from '#components/ArticleBody';
import Banner from '#components/Banner';
import Card from '#components/Card';
import Page from '#components/Page';
import Section from '#components/Section';
import AboutUsImage from '#public/aboutUsImage.jpg';

import { events as staticEvents } from '../page';

import styles from './page.module.css';

async function getEvents() {
    return staticEvents;
}

export async function generateStaticParams() {
    const events = await getEvents();
    return events.map((item) => ({ id: item.id }));
}

export default async function EventDetailPage({ params }: { params: { id: string } }) {
    const events = await getEvents();
    const {
        id,
    } = params;

    const eventDetails = events?.find((item) => item.id === id);
    const lessEvents = events?.filter((item) => item.id !== id).slice(0, 4);

    return (
        <Page contentClassName={styles.eventPage}>
            <Banner
                // NOTE: We need to replace with the real image as mentioned in figma
                bannerImageSrc={AboutUsImage}
                eyebrowHeading="Our Events"
                heading={eventDetails?.title}
            />
            <Section>
                <ArticleBody>
                    {eventDetails?.eventDescription}
                </ArticleBody>
            </Section>
            <Section
                heading="Explore Other Events"
            >
                <div className={styles.otherEvents}>
                    {lessEvents?.map((item) => (
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
