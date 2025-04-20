import React from 'react';
import { _cs } from '@togglecorp/fujs';

import Heading from '#components/Heading';
import ImageScrollCard from '#components/ImageScrollCard';
import image1 from '#public/community.jpg';

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
                    <Heading
                        className={styles.heading}
                        size="large"
                    >
                        {description}
                    </Heading>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.rightContainer}>
                        <div className={styles.img1}>
                            <ImageScrollCard
                                className={styles.image}
                                title="Girl who lost her country"
                                images={[image1]}
                                link="/"
                                variant="small"
                            />
                        </div>
                        <div className={styles.img2}>
                            <ImageScrollCard
                                className={styles.image}
                                title="Girl who lost her country"
                                images={[image1]}
                                link="/"
                                variant="small"
                            />
                        </div>
                        <div className={styles.img3}>
                            <ImageScrollCard
                                className={styles.image}
                                title="Girl who lost her country"
                                images={[image1]}
                                link="/"
                                variant="small"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
