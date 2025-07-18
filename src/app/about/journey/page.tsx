'use client';

import { useEffect } from 'react';
import {
    _cs,
    listToGroupList,
} from '@togglecorp/fujs';

import Heading from '#components/Heading';
import ImageWrapper from '#components/ImageWrapper';
import Page from '#components/Page';
import journey1 from '#public/journey/journey1.jpg';
import journey2 from '#public/journey/journey2.jpg';
import journey3 from '#public/journey/journey3.jpg';
import journey4 from '#public/journey/journey4.jpg';
import journey5 from '#public/journey/journey5.jpg';
import journey6 from '#public/journey/journey6.jpg';
import journey7 from '#public/journey/journey7.jpg';
import journey8 from '#public/journey/journey8.jpg';
import journey10 from '#public/journey/journey10.jpg';
import journey11 from '#public/journey/journey11.png';

import styles from './page.module.css';

const timelineData = [
    {
        id: 1,
        date: '2013-03-01',
        description: 'Deepti Gurung\'s fight for her daughters\' citizenship led her to FWLD, where lawyers helped her file a Supreme Court case, forming close bonds in the process.',
        image: journey1,
    },
    {
        id: 2,
        date: '2013-06-01',
        description: 'Deepti Gurung started the Facebook page \'Citizenship in the Name of Mother\' to gather support and public opinion on citizenship issues, sparking her activism journey.',
        image: journey2,
    },
    {
        id: 3,
        date: '2014-11-01',
        description: 'Deepti Gurung participated in Kathmandu’s 2000 Rising for Citizenship campaign organized by the Youth Network on Civil Society Organization (YNCSO) and the signature campaign in 13 districts of Nepal.',
        image: journey3,
    },
    {
        id: 4,
        date: '2014-12-01',
        description: 'Deepti Gurung participated in the Human Chain protest against the discriminatory citizenship provisions agreed by the drafting committee of the Constituent Assembly.',
        image: journey4,
    },
    {
        id: 5,
        date: '2015-09-01',
        description: 'Deepti Gurung was part of the delegation of FWLD that submitted a memorandum to former President Dr. Ram Baran Yadav, demanding citizenship through mothers.',
        image: journey5,
    },
    {
        id: 6,
        date: '2015-12-01',
        description: 'Citizenship Affected People’s Network was formed as a loose network of affected people with the support of FWLD.',
    },
    {
        id: 7,
        date: '2017-05-01',
        description: 'After a long and tremendous struggle, the Supreme Court ordered in favor of citizenship in the name of mother for Neha Gurung, Deepti Gurung’s elder daughter.',
        image: journey7,
    },
    {
        id: 8,
        date: '2019-11-01',
        description: 'Attended the World Conference on Statelessness, where Deepti Gurung and Neha Gurung co-created the “Free Neha” artwork, raising awareness about the challenges faced by stateless children like her daughter.',
        image: journey8,
    },
    {
        id: 9,
        date: '2021-07-01',
        description: 'CAPN was officially registered as an NGO, Deepti Gurung took the position of Executive Director to continue to advocate for gender equal citizenship laws in Nepal.',
        image: journey6,
    },
    {
        id: 10,
        date: '2024-09-01',
        description: 'Deepti Gurung, CAPN’s Executive Director and Founder was honored with the Women’s Refugee Commission’s prestigious Voices of Courage Award.',
        image: journey10,
    },
    {
        id: 11,
        date: '2024-10-01',
        description: 'Deepti Gurung, CAPN’s Executive Director and Founder was honored with the prestigious UNHCR Nansen Refugee Award.',
        image: journey11,
    },
];

const groupedByYear = listToGroupList(
    timelineData,
    (item) => new Date(item.date).getFullYear().toString(),
);

const finalData = Object.keys(groupedByYear).map((year) => ({
    year,
    events: groupedByYear[year],
}));

export default function Journey() {
    useEffect(() => {
        const journeyElement = document.getElementById('journey');
        const handleScroll = () => {
            const elements = Array.from(document.getElementsByClassName(styles.text));

            elements.forEach((el) => {
                const element = el as HTMLElement;
                const rect = element.getBoundingClientRect();

                if (rect.top <= 300) {
                    element.style.opacity = '0';
                } else {
                    element.style.opacity = '100';
                }
            });
        };

        journeyElement?.addEventListener('scroll', handleScroll);
        return () => journeyElement?.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Page
            className={styles.journey}
            elementId="journey"
        >
            <div className={styles.banner}>
                <Heading className={styles.heading} size="superLarge">
                    Years of Action, Voices of Change:
                    <br />
                    <span className={styles.yellow}>CAPN’S Journey</span>
                </Heading>
            </div>
            <div className={styles.content}>
                {/*
                <div className={styles.timelineNavPanel}>
                    {timelineYear.map((line) => (
                        <div className={styles.timePanel} key={line.date}>
                            <div className={styles.indicator} />
                            {line.date}
                        </div>
                    ))}
                </div>
                */}
                <div className={styles.timelineContent}>
                    {finalData.map((datum) => (
                        <div key={datum.year}>
                            <div className={styles.yearContainer}>
                                <Heading
                                    className={styles.year}
                                    size="extraLarge"
                                >
                                    {datum.year}
                                </Heading>
                            </div>
                            <div className={styles.yearContent}>
                                {datum.events.map((eventItem) => (
                                    <div
                                        key={eventItem.date}
                                        className={styles.eventItem}
                                    >
                                        <div className={_cs(styles.text, 'here')}>
                                            {eventItem.description}
                                        </div>
                                        {eventItem.image && (
                                            <ImageWrapper
                                                className={styles.imageWrapper}
                                                imageClassName={styles.image}
                                                src={eventItem.image}
                                                alt="timeline"
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Page>
    );
}
