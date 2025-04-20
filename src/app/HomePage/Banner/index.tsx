import React from 'react';
import Image from 'next/image';

import Button from '#components/Button';
import Heading from '#components/Heading';
import banner from '#public/banner.svg';

import styles from './styles.module.css';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.content}>
                <div className={styles.leftContent}>
                    <div className={styles.headings}>
                        <Heading className={styles.heading} size="superLarge">
                            <span className={styles.yellow}>Citizenship Is</span>
                            <br />
                            <span className={styles.yellow}>A Right, </span>
                            To
                            <br />
                            Have Rights
                        </Heading>
                    </div>
                    <Button>
                        Explore our mission
                    </Button>
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
