'use client';

import { useState } from 'react';
import { _cs } from '@togglecorp/fujs';
import Image from 'next/image';

import Banner from '#components/Banner';
import Button from '#components/Button';
import Heading from '#components/Heading';
import Page from '#components/Page';
import Section from '#components/Section';
import AboutUsImage from '#public/aboutUsImage.jpg';

import styles from './page.module.css';

const gallery = [
    {
        id: 'a1',
        title: 'Summer Vacation',
        images: [
            {
                id: '1',
                thumbnail: AboutUsImage,
                caption: 'Chillin’ on the beach',
            },
            {
                id: '2',
                thumbnail: AboutUsImage,
                caption: 'Golden hour views',
            },
            {
                id: '3',
                thumbnail: AboutUsImage,
                caption: 'Melting but worth it',
            },
            {
                id: '4',
                thumbnail: AboutUsImage,
                caption: 'Big blue vibes',
            },
        ],
    },
    {
        id: 'a2',
        title: 'Family Picnic',
        images: [
            {
                id: '5',
                thumbnail: AboutUsImage,
                url: 'https://example.com/images/picnic-food.jpg',
                caption: 'Picnic feast!',
            },
            {
                id: '6',
                thumbnail: AboutUsImage,
                caption: 'The crew',
            },
            {
                id: '7',
                thumbnail: AboutUsImage,
                caption: 'Frisbee champs',
            },
        ],
    },
    {
        id: 'a3',
        title: 'Mountain Hike',
        images: [
            {
                id: '8',
                thumbnail: AboutUsImage,
                caption: 'Trail mix & trails',
            },
            {
                id: '9',
                thumbnail: AboutUsImage,
                caption: 'Top of the world!',
            },
            {
                id: '10',
                thumbnail: AboutUsImage,
                caption: 'Worth the climb',
            },
            {
                id: '11',
                thumbnail: AboutUsImage,
                caption: 'Cozy rest stop',
            },
            {
                id: '12',
                thumbnail: AboutUsImage,
                caption: 'Mystic fog feels',
            },
        ],
    },
];

const tabs = [
    {
        key: 'gallery',
        label: 'Gallery',
    },
    {
        key: 'artwork',
        label: 'Artwork',
    },
];

const artworks = [
    {
        id: '1',
        thumbnail: AboutUsImage,
        caption: 'A walk in the woods',
    },
    {
        id: '2',
        thumbnail: AboutUsImage,
        caption: 'City lights at night',
    },
    {
        id: '3',
        thumbnail: AboutUsImage,
        caption: 'Peaks and peace',
    },
    {
        id: '4',
        thumbnail: AboutUsImage,
        caption: 'River run',
    },
    {
        id: '5',
        thumbnail: AboutUsImage,
        caption: 'Sands of time',
    },
    {
        id: '6',
        thumbnail: AboutUsImage,
        caption: 'Up, up, and away',
    },
    {
        id: '7',
        thumbnail: AboutUsImage,
        caption: 'Endless blue',
    },
    {
        id: '8',
        thumbnail: AboutUsImage,
        caption: 'Petal-powered beauty',
    },
];

export default function Gallery() {
    const [activeTab, setActiveTab] = useState<string>('gallery');

    return (
        <Page contentClassName={styles.gallery}>
            <Banner
                heading="Stories Through Images"
            />
            <Section>
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
                {activeTab === 'gallery' && (
                    gallery.map((album) => (
                        <div
                            key={album.id}
                            className={styles.album}
                        >
                            <div>
                                <Heading
                                    size="medium"
                                >
                                    {album.title}
                                </Heading>
                                <div className={styles.images}>
                                    {album.images.map((image) => (
                                        <Image
                                            key={image.id}
                                            className={styles.image}
                                            src={image.thumbnail}
                                            alt={image.caption}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))
                )}
                {activeTab === 'artwork' && (
                    <div className={styles.images}>
                        {artworks.map((image) => (
                            <Image
                                key={image.id}
                                className={styles.image}
                                src={image.thumbnail}
                                alt={image.caption}
                            />
                        ))}
                    </div>
                )}
            </Section>
        </Page>
    );
}
