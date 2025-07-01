import React from 'react';
import { _cs } from '@togglecorp/fujs';
import Image from 'next/image';

import divider from '#public/divider.svg';

import styles from './styles.module.css';

interface Props {
    className?: string;
}

export default function Divider(props: Props) {
    const { className } = props;
    return (
        <div className={_cs(className, styles.divider)}>
            <Image
                className={styles.image}
                src={divider}
                alt="Divider"
            />
        </div>
    );
}
