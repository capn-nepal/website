import React from 'react';
import {
    _cs,
    compareDate,
} from '@togglecorp/fujs';

import Card from '#components/Card';
import Link from '#components/Link';
import data from '#data/staticData.json';
import { type AllDataQuery } from '#generated/types/graphql';

import styles from './styles.module.css';

const description = 'From the streets to the studio (this text will also be changed, will send after being finalised) hear the voices shaping the narrative for equal citizenship through podcasts and voxpop features.';

type PodcastEpisodes = NonNullable<NonNullable<AllDataQuery['podcastEpisodes']>['results']>;
type VoxPopEpisodes = NonNullable<NonNullable<AllDataQuery['voxpopEpisodes']>['results']>;

interface Props {
    className?: string;
}

export default function Studio(props: Props) {
    const { className } = props;
    const allPodcastEpisodesData = data.podcastEpisodes.results as unknown as PodcastEpisodes;
    const allVoxpopEpisodesData = data.voxpopEpisodes.results as unknown as VoxPopEpisodes;
    const sortedPodcastEpisodes = [...allPodcastEpisodesData, ...allVoxpopEpisodesData]
        .sort((a, b) => compareDate(a.releaseDate, b.releaseDate));
    const limitedItems = sortedPodcastEpisodes.slice(0, 3);

    return (
        <div className={_cs(className, styles.studio)}>
            <div className={styles.content}>
                <div className={styles.leftContainer}>
                    <p
                        className={styles.description}
                    >
                        {description}
                    </p>
                    <Link
                        href="/resources/videos/"
                        showIcon
                    >
                        See All Episodes
                    </Link>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.rightContainer}>
                        {limitedItems?.map((item) => (
                            <div
                                key={item.id}
                                className={styles.img}
                            >
                                <Card
                                    className={styles.image}
                                    title={item.title}
                                    // FIXME: Add image later
                                    image={item.thumbnail?.url}
                                    link={item.videoUrl}
                                    headingSize="extraSmall"
                                    isExternalLink
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
