import React from 'react';

import Banner from '#components/Banner';
import Card from '#components/Card';
import Page from '#components/Page';
import Section from '#components/Section';
import AboutUsImage from '#public/aboutUsImage.jpg';

import { updates } from '../dummyData';

import styles from './page.module.css';

export default function Updates() {
    return (
        <Page contentClassName={styles.updates}>
            <Banner
                // NOTE: We need to replace with the real image as mentioned in figma
                bannerImageSrc={AboutUsImage}
                eyebrowHeading="Notices"
                heading="News & Updates"
            />
            <Section>
                <div className={styles.otherUpdates}>
                    {updates?.map((item) => (
                        <Card
                            key={item.slug}
                            className={styles.card}
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
