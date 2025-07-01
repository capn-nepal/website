import React from 'react';
import Image from 'next/image';

import Heading from '#components/Heading';
import Link from '#components/Link';
import banner from '#public/banner.svg';

import styles from './styles.module.css';

export default function HomeBanner() {
    return (
        <div className={styles.banner}>
            <div className={styles.content}>
                <div className={styles.leftContent}>
                    <div className={styles.headings}>
                        <Heading className={styles.heading} size="extraLarge">
                            <span className={styles.yellow}>Citizenship Is</span>
                            <br />
                            <span className={styles.yellow}>A Right, </span>
                            To
                            <br />
                            Have Rights
                        </Heading>
                    </div>
                    <Link
                        href="/about/approach/"
                        variant="button"
                    >
                        Explore our mission
                    </Link>
                </div>
                <Image
                    className={styles.image}
                    src={banner}
                    alt="Banner Image"
                />
            </div>
        </div>
    );
}
