import React from 'react';

import ArticleBody from '#components/ArticleBody';
import Banner from '#components/Banner';
import Card from '#components/Card';
import Page from '#components/Page';
import Section from '#components/Section';
import data from '#data/staticData.json';
import { type AllDataQuery } from '#generated/types/graphql';

import styles from './page.module.css';

type News = NonNullable<NonNullable<AllDataQuery['news']>['results']>;
async function getUpdates() {
    return data.news.results as unknown as News;
}

/* eslint-disable react-refresh/only-export-components */
export async function generateStaticParams() {
    const updates = await getUpdates();
    if (!updates.length) {
        return [{ slug: 'empty' }];
    }
    return updates.map((item) => ({ slug: item.slug }));
}

export default async function UpdateDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const updates = await getUpdates();

    const updateDetails = updates?.find((item) => item.slug === slug);
    const lessUpdates = updates?.filter((item) => item.slug !== slug).slice(0, 4);

    return (
        <Page contentClassName={styles.updatePage}>
            <Banner
                // NOTE: We need to replace with the real image as mentioned in figma
                // bannerImageSrc={updateDetails?.coverImage.url}
                eyebrowHeading="Our Updates"
                heading={updateDetails?.title}
                withoutBackground
            />
            <Section className={styles.section}>
                <ArticleBody
                    content={updateDetails?.description}
                />
            </Section>
            <Section
                className={styles.section}
                heading="Explore Other Updates"
            >
                <div className={styles.otherUpdates}>
                    {lessUpdates?.map((item) => (
                        <Card
                            key={item.id}
                            className={styles.card}
                            title={item.title}
                            date={item.publishedDate}
                            link={`/updates/${item.slug}/`}
                        />
                    ))}
                </div>
            </Section>
        </Page>
    );
}
