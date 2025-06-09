import { type StaticImageData } from 'next/image';

import ImageWrapper from '#components/ImageWrapper';

import styles from './styles.module.css';

export interface Props {
    year: number;
    description: string;
    image: StaticImageData | string;
}

export default function TimelineEventCard(props: Props) {
    const { year, description, image } = props;
    return (
        <div className={styles.timelineCard}>
            <div className={styles.card}>
                <div className={styles.year}>
                    {year}
                </div>
                <div className={styles.description}>
                    {description}
                </div>
            </div>
            <ImageWrapper
                className={styles.timelineImage}
                src={image}
                alt="timeline image"
            />
        </div>
    );
}
