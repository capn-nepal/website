import React from 'react';
import { _cs } from '@togglecorp/fujs';
import { type StaticImageData } from 'next/image';

import ArticleBody from '#components/ArticleBody';
import Heading from '#components/Heading';
import ImageWrapper from '#components/ImageWrapper';

import styles from './styles.module.css';

interface Props {
    className?: string;
    title: string;
    description: string;
    author: string;
    image: StaticImageData;
}

export default function Testimonial(props: Props) {
    const {
        className,
        title,
        author,
        description,
        image,
    } = props;

    return (
        <div className={_cs(styles.testimonial, className)}>
            {image && (
                <ImageWrapper
                    className={styles.image}
                    src={image}
                    alt={title ?? 'card-image'}
                />
            )}
            <div className={styles.content}>
                <Heading size="large">
                    {title}
                </Heading>
                <ArticleBody
                    className={styles.articleBody}
                    content={description}
                />
                <Heading>
                    {author}
                </Heading>
            </div>
        </div>
    );
}
