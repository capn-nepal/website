import React from 'react';
import { _cs } from '@togglecorp/fujs';

import styles from './styles.module.css';

interface Props {
    children: React.ReactNode;
    className?: string;
}

export default function ArticleBody(props: Props) {
    const {
        className,
        children,
    } = props;

    return (
        <div className={_cs(className, styles.articleBody)}>
            {children}
        </div>
    );
}
