'use client';

import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';

import Banner from '#components/Banner';
import Button from '#components/Button';
import Heading from '#components/Heading';
import Image from '#components/ImageWrapper';
import Page from '#components/Page';
import Section from '#components/Section';
import data from '#data/staticData.json';
import { type AllDataQuery } from '#generated/types/graphql';

import styles from './page.module.css';

type Galleries = NonNullable<NonNullable<AllDataQuery['galleries']>['results']>;
type GalleryItem = NonNullable<NonNullable<AllDataQuery['galleryItems']>['results']>;
type Artwork = NonNullable<NonNullable<AllDataQuery['artWorks']>['results']>;

const tabs = [
    { key: 'gallery', label: 'Gallery' },
    { key: 'artwork', label: 'Artwork' },
];
const galleries = data.galleries?.results as unknown as Galleries;
const allGalleryItems = data.galleryItems.results as unknown as GalleryItem;
const allArtWorkItems = data.artWorks.results as unknown as Artwork;

export default function Gallery() {
    const searchParams = useSearchParams();
    const tabParam = searchParams.get('tab');
    const [activeTab, setActiveTab] = useState<string>(tabParam === 'artwork' ? 'artwork' : 'gallery');
    const groupedGalleryItems = galleries.map((gallery) => ({
        ...gallery,
        images: allGalleryItems.filter(
            (item) => item.gallery?.id === gallery.id && !item.isArchived,
        ),
    })).filter((item) => item.images.length > 0);

    return (
        <Page contentClassName={styles.gallery}>
            <Banner withoutBackground heading="Stories Through Images" />
            <Section
                contentClassName={styles.sectionContent}
            >
                <div className={styles.tabs}>
                    {tabs.map((tab) => (
                        <Button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key)}
                            className={`${styles.tab} ${tab.key === activeTab ? styles.active : ''}`}
                            role="tab"
                        >
                            {tab.label}
                        </Button>
                    ))}
                </div>
                <div className={styles.content}>
                    {activeTab === 'gallery' && (
                        <>
                            {groupedGalleryItems.map((album) => (
                                <div
                                    key={album.id}
                                    className={styles.album}
                                >
                                    <Heading
                                        size="medium"
                                    >
                                        {album.name}
                                    </Heading>
                                    <div className={styles.images}>
                                        {album.images.map((image) => (
                                            <Image
                                                key={image.id}
                                                className={styles.imageWrapper}
                                                imageClassName={styles.image}
                                                src={image.image?.url || ''}
                                                alt={image.caption || 'Gallery image'}
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </>
                    )}
                    {activeTab === 'artwork' && (
                        allArtWorkItems.length > 0 ? (
                            <div className={styles.images}>
                                {allArtWorkItems.map((artwork) => (
                                    <Image
                                        key={artwork.id}
                                        className={styles.imageWrapper}
                                        imageClassName={styles.image}
                                        src={artwork.image.url}
                                        alt={artwork.name}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className={styles.noArtWork}>
                                No artwork at the moment.
                            </div>
                        )
                    )}
                </div>
            </Section>
        </Page>
    );
}
