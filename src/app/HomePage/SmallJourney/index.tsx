import React from 'react';
import { _cs } from '@togglecorp/fujs';
import Image from 'next/image';

import Heading from '#components/Heading';
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
                    <span>CAPN's Journey</span>
                </Heading>
                <Image
                    className={styles.image}
                    src={roadmapSmall}
                    alt=""
                />
            </div>
        </div>
    );
}
