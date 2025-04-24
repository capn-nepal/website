import React from 'react';
import { _cs } from '@togglecorp/fujs';

import Heading from '#components/Heading';
import ImageScrollCard from '#components/ImageScrollCard';
import himalayaImage from '#public/himalaya.png';
import peopleImage from '#public/people.png';

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
                        title="&quot;Without citizenship, I felt invisible. Gaining it changed everything&quot;"
                        images={[peopleImage]}
                        link="/"
                    />
                    <ImageScrollCard
                        className={styles.card}
                        title="Creative Collaboration for Change"
                        description="This space highlights artwork, photography, and creative expressions from individuals affected showcasing their talent, resilience, and stories beyond the struggle."
                        images={[himalayaImage]}
                        link="/"
                    />
                </div>
            </div>
        </div>
    );
}
