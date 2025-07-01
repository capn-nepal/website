import React from 'react';
import { _cs } from '@togglecorp/fujs';
import Image, { type StaticImageData } from 'next/image';

import Heading from '#components/Heading';
import Link from '#components/Link';

import styles from './styles.module.css';

interface Props {
    className?: string;
    images: StaticImageData[];
    title?: string;
    description?: string;
    link: string;
    size?: 'small' | 'normal';
    linkText?: string;
}

export default function Card(props: Props) {
    const {
        className,
        title,
        images,
        description,
        link,
        size = 'normal',
        linkText = 'View More',
    } = props;
    console.log('here', link);

    return (
        <div
            className={_cs(
                styles.card,
                className,
            )}
        >
            {images && (
                <Image
                    className={styles.image}
                    src={images[0]}
                    alt={title ?? 'card-image'}
                />
            )}
            <Heading
                className={styles.title}
                size={size === 'normal' ? 'large' : 'extraSmall'}
            >
                {title}
            </Heading>
            {description && (
                <div className={styles.description}>
                    {description}
                </div>
            )}
            {size === 'normal' && (
                <Link
                    className={styles.link}
                    href={link}
                    showIcon
                >
                    {linkText}
                </Link>
            )}
        </div>
    );
}
