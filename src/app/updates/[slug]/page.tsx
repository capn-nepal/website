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

type Blogs = NonNullable<NonNullable<AllDataQuery['blogs']>['results']>;
async function getUpdates() {
    return data.blogs.results as unknown as Blogs;
}

/* eslint-disable react-refresh/only-export-components */
export async function generateStaticParams() {
    const updates = await getUpdates();
    if (!updates.length) {
        return [{ slug: 'empty' }];
    }
    return updates.map((item) => ({ slug: item.id }));
}

export default async function UpdateDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const updates = await getUpdates();

    const updateDetails = updates?.find((item) => item.id === slug);
    const lessUpdates = updates?.filter((item) => item.id !== slug).slice(0, 4);

    return (
        <Page contentClassName={styles.updatePage}>
            <Banner
                // NOTE: We need to replace with the real image as mentioned in figma
                bannerImageSrc={updateDetails?.coverImage.url}
                eyebrowHeading="Our Updates"
                heading={updateDetails?.title}
            />
            <Section>
                <ArticleBody
                    content={updateDetails?.content}
                />
            </Section>
            <Section
                heading="Explore Other Updates"
            >
                <div className={styles.otherUpdates}>
                    {lessUpdates?.map((item) => (
                        <Card
                            key={item.id}
                            className={styles.card}
                            image={AboutUsImage}
                            title={item.title}
                            date={item.publishedDate}
                            link={`/updates/${item.id}`}
                        />
                    ))}
                </div>
            </Section>
        </Page>
    );
}
