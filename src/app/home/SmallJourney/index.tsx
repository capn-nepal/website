import React from 'react';
import { _cs } from '@togglecorp/fujs';
import Image from 'next/image';

import Heading from '#components/Heading';
import Link from '#components/Link';
import roadmapSmall from '#public/roadmapSmall.png';

import styles from './styles.module.css';

interface Props {
    className?: string;
}

export default function SmallJourney(props: Props) {
    const { className } = props;

    return (
        <div className={_cs(className, styles.smallJourney)}>
            <div className={styles.content}>
                <Heading
                    className={styles.heading}
                    size="extraLarge"
                >
                    Years of Action, Voices of Change:
                    <br />
                    <span>CAPN&apos;s Journey</span>
                </Heading>
                <Image
                    className={styles.image}
                    src={roadmapSmall}
                    alt=""
                />
                <Link
                    className={styles.link}
                    href="/"
                    showIcon
                >
                    View Complete Journey
                </Link>
            </div>
        </div>
    );
}
