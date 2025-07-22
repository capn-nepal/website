'use client';

import { useState } from 'react';
import { _cs } from '@togglecorp/fujs';

import Banner from '#components/Banner';
import Button from '#components/Button';
import ImageWrapper from '#components/ImageWrapper';
import Link from '#components/Link';
import Page from '#components/Page';
import Section from '#components/Section';
import data from '#data/staticData.json';
import { type AllDataQuery } from '#generated/types/graphql';

import styles from './page.module.css';

type YoutubeVideos = NonNullable<NonNullable<AllDataQuery['youtubeVideos']>['results']>;
type VoxpopVideos = NonNullable<NonNullable<AllDataQuery['voxpopEpisodes']>['results']>;

export interface TabItem {
    key: string;
    label: string;
}
const tabs: TabItem[] = [
    {
        key: 'podcast',
        label: 'Podcasts',
    },
    {
        key: 'voxpop',
        label: 'VoxPop',
    },
    {
        key: 'youtube-videos',
        label: 'Youtube Videos',
    },
];

const allYoutubeVideos = data.youtubeVideos.results as unknown as YoutubeVideos;
const allVoxpopVideos = data.voxpopEpisodes.results as unknown as VoxpopVideos;
const allPodcastVideos = data.podcastEpisodes.results as unknown as VoxpopVideos;

export default function Videos() {
    const [activeTab, setActiveTab] = useState<string>('youtube-videos');

    return (
        <Page
            contentClassName={styles.videos}
        >
            <Banner
                withoutBackground
                heading="Voices That Matter"
            />
            <Section
                // FIXME: Fix the spacing between banner and section content
                contentClassName={styles.section}
            >
                <div className={styles.tabs}>
                    {tabs.map((tab) => (
                        <Button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key)}
                            className={_cs(styles.tab, (tab.key === activeTab && styles.active))}
                            role="tab"
                        >
                            {tab.label}
                        </Button>
                    ))}
                </div>
                {activeTab === 'podcast' && (
                    <div className={styles.videoSection}>
                        {allPodcastVideos.map((item) => (
                            (item.thumbnail?.url && item.thumbnail.name)
                                ? (
                                    <Link
                                        key={item.id}
                                        href={item.videoUrl}
                                        target="_blank"
                                    >
                                        <ImageWrapper
                                            className={styles.imageWrapper}
                                            imageClassName={styles.image}
                                            src={item.thumbnail?.url}
                                            alt={item.thumbnail?.name}
                                        />
                                    </Link>
                                )
                                : null
                        ))}
                    </div>
                )}
                {activeTab === 'voxpop' && (
                    <div className={styles.videoSection}>
                        {allVoxpopVideos.map((item) => (
                            (item.thumbnail?.url && item.thumbnail.name)
                                ? (
                                    <Link
                                        key={item.id}
                                        href={item.videoUrl}
                                        target="_blank"
                                    >
                                        <ImageWrapper
                                            className={styles.imageWrapper}
                                            imageClassName={styles.image}
                                            src={item.thumbnail?.url}
                                            alt={item.thumbnail?.name}
                                        />
                                    </Link>
                                )
                                : null
                        ))}
                    </div>
                )}
                {activeTab === 'youtube-videos' && (
                    <div className={styles.videoSection}>
                        {allYoutubeVideos.map((item) => {
                            const videoId = item.videoUrl?.split('v=')[1]?.split('&')[0];
                            return videoId ? (
                                <iframe
                                    key={item.id}
                                    className={styles.videoEmbed}
                                    src={`https://www.youtube.com/embed/${videoId}`}
                                    title={item.title}
                                    allowFullScreen
                                />
                            ) : (
                                null
                            );
                        })}
                    </div>
                )}
            </Section>
        </Page>
    );
}
