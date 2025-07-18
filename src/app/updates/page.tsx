import React from 'react';

import Banner from '#components/Banner';
import Card from '#components/Card';
import Page from '#components/Page';
import Section from '#components/Section';
import data from '#data/staticData.json';
import { type AllDataQuery } from '#generated/types/graphql';
import presentationImage from '#public/presentation.jpg';

import styles from './page.module.css';

type Blogs = NonNullable<NonNullable<AllDataQuery['blogs']>['results']>;

const allBlogsData = data.blogs.results as unknown as Blogs;

export default function Updates() {
    const hasUpdates = allBlogsData && allBlogsData.length > 0;

    return (
        <Page contentClassName={styles.updates}>
            <Banner
                bannerImageSrc={presentationImage}
                eyebrowHeading="Notices"
                heading="News & Updates"
            />
            <Section>
                <div className={styles.otherUpdates}>
                    {hasUpdates ? (
                        allBlogsData.map((item) => (
                            <Card
                                key={item.id}
                                className={styles.card}
                                title={item.title}
                                date={item.publishedDate}
                                link={`/updates/${item.id}`}
                            />
                        ))
                    ) : (
                        <div className={styles.emptyState}>
                            No news updates have been posted yet.
                        </div>
                    )}
                </div>
            </Section>
        </Page>
    );
}
