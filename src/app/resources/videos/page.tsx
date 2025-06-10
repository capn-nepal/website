'use client';

import { useState } from 'react';
import { _cs } from '@togglecorp/fujs';
import Image from 'next/image';

import Banner from '#components/Banner';
import Button from '#components/Button';
import Link from '#components/Link';
import Page from '#components/Page';
import Section from '#components/Section';
import PodcastImage from '#public/sosPodcast1.png';
import PodcastSecondaryImage from '#public/sosPodcast2.png';
import VoxpopImage from '#public/voxpopImage.png';

import styles from './page.module.css';

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

const podcasts = [
    {
        id: '1',
        thumbnail: PodcastImage,
        url: 'https://www.youtube.com/watch?v=MXvvEuxE-S8',
    },
    {
        id: '2',
        thumbnail: PodcastImage,
        url: 'https://www.youtube.com/watch?v=MXvvEuxE-S8',
    },
    {
        id: '3',
        thumbnail: PodcastImage,
        url: 'https://www.youtube.com/watch?v=MXvvEuxE-S8',
    },
    {
        id: '4',
        thumbnail: PodcastImage,
        url: 'https://www.youtube.com/watch?v=MXvvEuxE-S8',
    },
    {
        id: '5',
        thumbnail: PodcastImage,
        url: 'https://www.youtube.com/watch?v=MXvvEuxE-S8',
    },
];

const voxpops = [
    {
        id: '1',
        thumbnail: VoxpopImage,
        url: 'https://www.youtube.com/watch?v=MXvvEuxE-S8',
    },
    {
        id: '2',
        thumbnail: VoxpopImage,
        url: 'https://www.youtube.com/watch?v=MXvvEuxE-S8',
    },
    {
        id: '3',
        thumbnail: VoxpopImage,
        url: 'https://www.youtube.com/watch?v=MXvvEuxE-S8',
    },
];

const youtubeVideos = [
    {
        id: '1',
        thumbnail: PodcastSecondaryImage,
        url: 'https://www.youtube.com/watch?v=MXvvEuxE-S8',
    },
    {
        id: '2',
        thumbnail: PodcastSecondaryImage,
        url: 'https://www.youtube.com/watch?v=MXvvEuxE-S8',
    },
    {
        id: '3',
        thumbnail: PodcastSecondaryImage,
        url: 'https://www.youtube.com/watch?v=MXvvEuxE-S8',
    },
];

export default function Videos() {
    const [activeTab, setActiveTab] = useState<string>('youtube-videos');

    return (
        <Page contentClassName={styles.videos}>
            <Banner
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
                        {podcasts.map((item) => (
                            <Link
                                key={item.id}
                                href={item.url}
                                target="_blank"
                            >
                                <Image
                                    className={styles.image}
                                    src={item.thumbnail}
                                    alt="video thumbnail"
                                />
                            </Link>
                        ))}
                    </div>
                )}
                {activeTab === 'voxpop' && (
                    <div className={styles.videoSection}>
                        {voxpops.map((item) => (
                            <Link
                                key={item.id}
                                href={item.url}
                                target="_blank"
                            >
                                <Image
                                    className={styles.image}
                                    src={item.thumbnail}
                                    alt="video thumbnail"
                                />
                            </Link>
                        ))}
                    </div>
                )}
                {activeTab === 'youtube-videos' && (
                    <div className={styles.videoSection}>
                        {youtubeVideos.map((item) => (
                            <Link
                                key={item.id}
                                href={item.url}
                                target="_blank"
                            >
                                <Image
                                    className={styles.image}
                                    src={item.thumbnail}
                                    alt="video thumbnail"
                                />
                            </Link>
                        ))}
                    </div>
                )}
            </Section>
        </Page>
    );
}
