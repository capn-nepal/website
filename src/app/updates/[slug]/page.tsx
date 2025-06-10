import React from 'react';

import ArticleBody from '#components/ArticleBody';
import Banner from '#components/Banner';
import Card from '#components/Card';
import Page from '#components/Page';
import Section from '#components/Section';
import AboutUsImage from '#public/aboutUsImage.jpg';

import { updates as staticUpdates } from '../../dummyData';

import styles from './page.module.css';

async function getUpdates() {
    return staticUpdates;
}

export async function generateStaticParams() {
    const updates = await getUpdates();
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
                bannerImageSrc={updateDetails?.coverImage}
                eyebrowHeading="Our Updates"
                heading={updateDetails?.title}
            />
            <Section>
                <ArticleBody>
                    {updateDetails?.content}
                </ArticleBody>
            </Section>
            <Section
                heading="Explore Other Updates"
            >
                <div className={styles.otherUpdates}>
                    {lessUpdates?.map((item) => (
                        <Card
                            key={item.slug}
                            className={styles.card}
                            image={AboutUsImage}
                            title={item.title}
                            date={item.publishedDate}
                            link={`/updates/${item.slug}`}
                        />
                    ))}
                </div>
            </Section>
        </Page>
    );
}
