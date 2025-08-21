import React from 'react';

import Banner from '#components/Banner';
import Card from '#components/Card';
import Page from '#components/Page';
import Section from '#components/Section';
import data from '#data/staticData.json';
import { type AllDataQuery } from '#generated/types/graphql';
import presentationImage from '#public/presentation.jpg';

import styles from './page.module.css';

type News = NonNullable<NonNullable<AllDataQuery['news']>['results']>;

const allNewsData = data.news.results as unknown as News;

export default function Updates() {
    const hasUpdates = allNewsData && allNewsData.length > 0;

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
                        allNewsData.map((item) => (
                            <Card
                                key={item.id}
                                className={styles.card}
                                title={item.title}
                                date={item.publishedDate}
                                link={`/updates/${item.slug}`}
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
