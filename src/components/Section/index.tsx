import React from 'react';
import { _cs } from '@togglecorp/fujs';

import Heading, { type SizeTypes } from '#components/Heading';

import styles from './styles.module.css';

interface Props {
    heading?: string;
    headingClassName?: string;
    headingSize?: SizeTypes;
    children: React.ReactNode;
    className?: string;
    contentClassName?: string;
}

export default function Section(props: Props) {
    const {
        className,
        heading,
        headingClassName,
        headingSize = 'extraLarge',
        children,
        contentClassName,
    } = props;

    return (
        <div className={_cs(className, styles.section)}>
            <div
                className={_cs(contentClassName, styles.content)}
            >
                {heading && (
                    <Heading
                        className={_cs(headingClassName, styles.heading)}
                        size={headingSize}
                    >
                        {heading}
                    </Heading>
                )}
                {children}
            </div>
        </div>
    );
}
