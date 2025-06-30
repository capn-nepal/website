import React from 'react';
import { _cs } from '@togglecorp/fujs';

import ImageScrollCard from '#components/ImageScrollCard';
import Link from '#components/Link';
import sosPodcast1 from '#public/sosPodcast1.png';
import sosPodcast2 from '#public/sosPodcast2.png';
import voxpopImage from '#public/voxpopImage.png';

import styles from './styles.module.css';

const description = 'From the streets to the studio—hear the voices shaping the fight for equal citizenship through podcasts and voxpop features.';

interface Props {
    className?: string;
}

export default function Studio(props: Props) {
    const { className } = props;

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
                        // TODO: Add Episode link
                        href="/"
                        showIcon
                    >
                        See All Episodes
                    </Link>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.rightContainer}>
                        <div className={styles.img1}>
                            <ImageScrollCard
                                className={styles.image}
                                images={[sosPodcast1]}
                                link="/"
                                size="small"
                            />
                        </div>
                        <div className={styles.img2}>
                            <ImageScrollCard
                                className={styles.image}
                                images={[sosPodcast2]}
                                link="/"
                                size="small"
                            />
                        </div>
                        <div className={styles.img3}>
                            <ImageScrollCard
                                className={styles.image}
                                images={[voxpopImage]}
                                link="/"
                                size="small"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
