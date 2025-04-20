import React from 'react';
import Image from 'next/image';

import divider from '#public/divider.svg';

import styles from './styles.module.css';

export default function Divider() {
    return (
        <div className={styles.divider}>
            <Image
                className={styles.image}
                src={divider}
                alt="Divider"
            />
        </div>
    );
}
