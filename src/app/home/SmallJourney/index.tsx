import React from 'react';
import { _cs, unique } from '@togglecorp/fujs';
import Image from 'next/image';

import Heading from '#components/Heading';
import Link from '#components/Link';
import TimelineEventCard, { type Props as TimelineProps } from '#components/TimelineEventCard';
import AboutUsImage from '#public/aboutUsImage.jpg';
import roadmapSmall from '#public/roadmapSmall.png';

import styles from './styles.module.css';

type TimelineData = TimelineProps & { id: number }
type TimelineYear = { year: number };

const timelineData: TimelineData[] = [
    {
        id: 1,
        year: 2013,
        description: 'Deepti Gurung started the Facebook page &quot; Citizenship in the Name of Mother &quot; to gather support and public opinion oncitizenship issues, sparking her activism journey.',
        image: AboutUsImage,
    },
    {
        id: 2,
        year: 2015,
        description: 'Deepti Gurung was part of the delegation of FWLD that submitted a memorandum to former President Dr. Ram Baran Yadav, demanding citizenship through mothers.',
        image: AboutUsImage,
    },
    {
        id: 3,
        year: 2015,
        description: 'Citizenship Affected People’s Network was formed as a loose network of affected people with the support of FWLD.',
        image: AboutUsImage,
    },
    {
        id: 4,
        year: 2021,
        description: 'CAPN was officially registered as an NGO, Deepti Gurung took the position of Executive Director to continue to advocate for gender equal citizenship laws in Nepal.',
        image: AboutUsImage,
    },
    {
        id: 5,
        year: 2024,
        description: 'Deepti Gurung, CAPN’s Executive Director and Founder was honored with the Women’s Refugee Commission’s prestigious Voices of Courage Award.',
        image: AboutUsImage,
    },
    {
        id: 6,
        year: 2024,
        description: 'Deepti Gurung, CAPN’s Executive Director and Founder was honored with the prestigious UNHCR Nansen Refugee Award.',
        image: AboutUsImage,
    },
];

const timelineYear: TimelineYear[] = unique(
    timelineData,
    (item) => item.year,
);

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
                    Sneak Peak into: CAPN&apos;S Journey
                </Heading>
                <div className={styles.timelineNavPanel}>
                    {timelineYear.map((line) => (
                        <div className={styles.timePanel} key={line.year}>
                            <div className={styles.indicator} />
                            {line.year}
                        </div>
                    ))}
                </div>
                <div className={styles.timelineContent}>
                    {timelineData.map((datum) => (
                        <TimelineEventCard
                            key={datum.id}
                            year={datum.year}
                            description={datum.description}
                            image={datum.image}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
