import { unique } from '@togglecorp/fujs';

import Heading from '#components/Heading';
import Page from '#components/Page';
import TimelineEventCard, { type Props as TimelineProps } from '#components/TimelineEventCard';
import AboutUsImage from '#public/aboutUsImage.jpg';

import styles from './page.module.css';

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
        year: 2013,
        description: 'Deepti Gurung started the Facebook page &quot; Citizenship in the Name of Mother &quot; to gather support and public opinion oncitizenship issues, sparking her activism journey.',
        image: AboutUsImage,
    },
    {
        id: 3,
        year: 2014,
        description: 'Deepti Gurung co-organized and participated in Kathmandu’s 2000 Rising for Citizenship campaign organized by the Youth Network on Civil Society Organization(YNCSO) and the signature campaign in 13 districts of Nepal.',
        image: AboutUsImage,
    },
    {
        id: 4,
        year: 2014,
        description: 'Deepti Gurung participated in the Human Chain protest against the discriminatory citizenship provisions agreed by the drafting committee of the Constituent Assembly.',
        image: AboutUsImage,
    },
    {
        id: 5,
        year: 2015,
        description: 'Deepti Gurung was part of the delegation of FWLD that submitted a memorandum to former President Dr. Ram Baran Yadav, demanding citizenship through mothers.',
        image: AboutUsImage,
    },
    {
        id: 6,
        year: 2015,
        description: 'Citizenship Affected People’s Network was formed as a loose network of affected people with the support of FWLD.',
        image: AboutUsImage,
    },
    {
        id: 7,
        year: 2017,
        description: 'After a long and tremendous struggle, the Supreme Court ordered in  favor of citizenship in the name of mother for Neha Gurung, Deepti Gurung’s elder daughter.',
        image: AboutUsImage,
    },
    {
        id: 8,
        year: 2019,
        description: 'Attended the World Conference on Statelessness, where Deepti Gurung and Neha Gurung co-created the “Free Neha” artwork, raising awareness about the challenges faced by stateless children like her daughter.',
        image: AboutUsImage,
    },
    {
        id: 9,
        year: 2021,
        description: 'CAPN was officially registered as an NGO, Deepti Gurung took the position of Executive Director to continue to advocate for gender equal citizenship laws in Nepal.',
        image: AboutUsImage,
    },
    {
        id: 10,
        year: 2024,
        description: 'Deepti Gurung, CAPN’s Executive Director and Founder was honored with the Women’s Refugee Commission’s prestigious Voices of Courage Award.',
        image: AboutUsImage,
    },
    {
        id: 11,
        year: 2024,
        description: 'Deepti Gurung, CAPN’s Executive Director and Founder was honored with the prestigious UNHCR Nansen Refugee Award.',
        image: AboutUsImage,
    },
];

const timelineYear: TimelineYear[] = unique(
    timelineData,
    (item) => item.year,
);

export default function Journey() {
    return (
        <Page>
            <div className={styles.banner}>
                <Heading className={styles.heading} size="superLarge">
                    Years of Action, Voices of Change:
                    <br />
                    <span className={styles.yellow}>CAPN’S Journey</span>
                </Heading>
            </div>
            <div className={styles.content}>
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
        </Page>
    );
}
