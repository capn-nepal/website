import React from 'react';

import ArticleBody from '#components/ArticleBody';
import Banner from '#components/Banner';
import Card from '#components/Card';
import Page from '#components/Page';
import Section from '#components/Section';
import data from '#data/staticData.json';
import { type AllDataQuery } from '#generated/types/graphql';
import AboutUsImage from '#public/aboutUsImage.jpg';

import styles from './page.module.css';

type Events = NonNullable<NonNullable<AllDataQuery['events']>['results']>;

async function getEvents() {
    return data.events.results as unknown as Events;
}

/* eslint-disable react-refresh/only-export-components */
export async function generateStaticParams() {
    const events = await getEvents();
    return events.map((item) => ({ id: item.id }));
}

type PageProps = {
    params: Promise<{
        id: string;
    }>;
};

export default async function EventDetailPage({ params }: PageProps) {
    const events = await getEvents();
    const {
        id,
    } = await params;

    const eventDetails = events?.find((item) => item.id === id);
    const lessEvents = events?.filter((item) => item.id !== id).slice(0, 4);

    return (
        <Page contentClassName={styles.eventPage}>
            <Banner
                // NOTE: We need to replace with the real image as mentioned in figma
                bannerImageSrc={AboutUsImage}
                eyebrowHeading="Our Events"
                heading={eventDetails?.name}
            />
            <Section>
                <ArticleBody
                    content={eventDetails?.description}
                />
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
