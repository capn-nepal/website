import React from 'react';
import { _cs } from '@togglecorp/fujs';

import Heading from '#components/Heading';
import ImageScrollCard from '#components/ImageScrollCard';
import testImage from '#public/image2.png';

import styles from './styles.module.css';

interface Props {
    className?: string;
}

export default function Voices(props: Props) {
    const { className } = props;

    return (
        <div className={_cs(className, styles.voices)}>
            <div className={styles.content}>
                <Heading
                    className={styles.heading}
                    size="extraLarge"
                >
                    Voices From Our Community
                </Heading>
                <div className={styles.cards}>
                    <ImageScrollCard
                        className={styles.card}
                        title="Without citizenship, I felt invisible. Gaining it changed everything"
                        images={[testImage]}
                        link="/"
                    />
                    <ImageScrollCard
                        className={styles.card}
                        title="Creative Collaboration for Change"
                        description="This space highlights artwork, photography, and creative expressions from individuals affected showcasing their talent, resilience, and stories beyond the struggle."
                        images={[testImage]}
                        link="/"
                    />
                </div>
            </div>
        </div>
    );
}
