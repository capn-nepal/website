import React, { useMemo } from 'react';
import {
    _cs,
    decodeDate,
    isNotDefined,
} from '@togglecorp/fujs';
import Image, { type StaticImageData } from 'next/image';

import Heading from '#components/Heading';

import styles from './styles.module.css';

interface Props {
    className?: string;
    image?: StaticImageData;
    title: string;
    date?: string;
    description?: string;
}

export default function Card(props: Props) {
    const {
        className,
        title,
        image,
        date: fullDate,
        description,
    } = props;

    const dateStrings = useMemo((): { date: string, month: string } | undefined => {
        if (!fullDate) {
            return undefined;
        }
        const validDate = decodeDate(fullDate);
        return {
            date: `${validDate.getDate()}`,
            month: validDate.toLocaleString('default', { month: 'long' }),
        };
    }, [fullDate]);

    return (
        <div
            className={_cs(
                styles.card,
                className,
                isNotDefined(image) && styles.noImage,
            )}
        >
            {image && (
                <Image
                    className={styles.image}
                    src={image}
                    alt={title ?? 'card-image'}
                />
            )}
            {dateStrings?.date && dateStrings?.month && (
                <div className={styles.dateContainer}>
                    <p className={styles.date}>{dateStrings.date}</p>
                    <p>{dateStrings.month}</p>
                </div>
            )}
            <div className={styles.emptyDiv} />
            <Heading
                className={styles.title}
                size="large"
            >
                {title}
            </Heading>
            {description && (
                <div className={styles.description}>
                    {description}
                </div>
            )}
        </div>
    );
}
