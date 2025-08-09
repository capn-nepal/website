'use client';

import {
    useEffect,
    useRef,
} from 'react';

import Heading from '#components/Heading';
import ImageWrapper from '#components/ImageWrapper';
import Section from '#components/Section';
import Accountability from '#public/valueIcons/Accountability.svg';
import Dignified from '#public/valueIcons/Dignified Citizenship.svg';
import Empathy from '#public/valueIcons/Empathy.svg';
import Gender from '#public/valueIcons/Gender Equality.svg';
import Justice from '#public/valueIcons/Justice.svg';

import styles from './styles.module.css';

const values = [
    {
        title: 'Gender Equality',
        description:
        'We advocate for gender-equal citizenship laws to dismantle inequality and ensure everyone can thrive without discrimination.',
        icon: Gender, // import Gender from your assets
    },
    {
        title: 'Dignified Citizenship & Livelihood',
        description:
        'We support dignified livelihoods to empower impacted individuals with self-sufficiency and strengthen their citizenship rights.',
        icon: Dignified, // import Dignified from your assets
    },
    {
        title: 'Intersectional Justice',
        description:
        'CAPN addresses intersecting forms of discrimination and centers impacted voices with dignity, rejecting tokenism for real empowerment.',
        icon: Justice, // import Justice from your assets
    },
    {
        title: 'Accountability & Sensitivity',
        description:
        'We uphold accountability and sensitivity, ensuring transparent, respectful work grounded in integrity and empathy toward the communities we serve.',
        icon: Accountability, // import Accountability from your assets
    },
    {
        title: 'Empathy & Efficiency',
        description:
        'We prioritize sustainability and empathy, managing resources responsibly while building trust through compassionate engagement.',
        icon: Empathy, // import Empathy from your assets
    },
];

export default function Values() {
    const itemsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.visible);
                    } else {
                        entry.target.classList.remove(styles.visible);
                    }
                });
            },
            {
                threshold: 0.5,
                root: null,
                rootMargin: '0% 0px -200px 0px',
            },
        );

        itemsRef.current.forEach((el) => el && observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <Section className={styles.values}>
            <div className={styles.valuesContent}>
                <div className={styles.valueHeadingSection}>
                    <Heading className={styles.valueHeading} size="extraLarge">
                        Our Values
                    </Heading>
                    <p className={styles.description}>
                        At CAPN, our values are more than ideals—they
                        are actionable commitments that shape our pursuit
                        of gender-equal citizenship and inclusive justice.
                    </p>
                </div>
                <div className={styles.valuesList}>
                    {values.map((item, index) => (
                        <div
                            key={item.title}
                            className={styles.valueBox}
                        >
                            <div className={styles.heading}>
                                {item.title}
                            </div>
                            <ImageWrapper
                                className={styles.valueIcon}
                                src={item.icon}
                                alt={item.title}
                            />
                            <div
                                className={styles.separator}
                                ref={(el) => {
                                    if (el) {
                                        itemsRef.current[index] = el;
                                    }
                                }}
                            >
                                <div className={styles.outerCircle}>
                                    <div className={styles.innerCircle} />
                                </div>
                                <div className={styles.line} />
                            </div>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
