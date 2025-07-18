import React from 'react';
import { _cs } from '@togglecorp/fujs';

import ArticleBody from '#components/ArticleBody';
import Heading from '#components/Heading';

import styles from './styles.module.css';

interface Props {
    className?: string;
    title: string;
    description: string;
    author: string;
}

export default function Testimonial(props: Props) {
    const {
        className,
        title,
        author,
        description,
    } = props;

    return (
        <div className={_cs(styles.testimonial, className)}>
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
