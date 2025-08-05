import React from 'react';
import { _cs } from '@togglecorp/fujs';

import Heading from '#components/Heading';
import Section from '#components/Section';
import kathaharuLogo from '#public/CommunityMaker/Kathaharu.png';
import noahsArkLogo from '#public/CommunityMaker/NoahsArk.png';

import CommunityCard from './CommunityCard';

import styles from './styles.module.css';

interface Props {
    className?: string;
}

const community = [
    {
        title: 'Ms. Upashana Shrestha',
        description: ' is a versatile filmmaker based in Kathmandu whose work thoughtfully explores gender politics and mental health, often challenging the complexities of human nature. She collaborated with CAPN to direct Beyond the Barbed Wire, a documentary profiling CAPN’s Executive Director. Upashana brought immense creativity, adaptability, and passion to the project, making the collaboration both enjoyable and deeply enriching. Her approach not only elevated the storytelling but also made the entire process a meaningful and inspiring experience.',
        links: [
            { label: 'Instagram', url: 'https://www.instagram.com/themodestnarcissist' },
        ],
    },
    {
        logoSrc: noahsArkLogo,
        logoAlt: "Noah's Ark Logo",
        title: 'Noah’s Ark',
        description: ' is a creative animation studio established in 2013 that uses the power of art and animation to promote social awareness. In collaboration with CAPN, the studio’s creative director, Mr. Prabhakar Chhetri led the production of two animated videos focused on raising awareness about gender-equal citizenship laws and the importance of birth registration. This collaboration offered us a meaningful opportunity to learn, exchange ideas, and co-create impactful content that blends creativity with advocacy.',
        links: [
            { label: 'Facebook', url: 'https://www.facebook.com/NoahsArkAnimation/' },
            { label: 'Youtube', url: 'https://www.youtube.com/watch?v=O-rpx6TmR3k' },
        ],
    },
    {
        logoSrc: kathaharuLogo,
        logoAlt: 'Kathaharu Logo',
        title: 'Kathaharu',
        description: ' Production is a dynamic audio-visual company with over 10 years of experience across documentaries, short films, TV commercials, and more. Led by Executive Director Mr. Shashank Shrestha, the team collaborated with CAPN to produce two seasons of the State of Statelessness Podcast series. Their professionalism, creativity, and dedication from shooting, editing, and final delivery played a vital role in the success of the series. The collaboration was not only seamless but also filled with valuable learnings at every stage of production.',
        links: [
            { label: 'Website', url: 'https://kathaharu.com/' },
        ],
    },
];

export default function ChangeMaker(props: Props) {
    const { className } = props;

    return (
        <div className={_cs(className, styles.changeMaker)}>
            <div className={styles.content}>
                <Heading
                    className={styles.heading}
                    size="extraLarge"
                >
                    Meet our community of changemakers
                    <br />
                    <p>
                        We proudly collaborate with creative partners who bring our advocacy to life
                        through storytelling, design, and media.
                    </p>
                </Heading>
                <div className={styles.marqueeWrapper}>
                    <div className={styles.marqueeContent}>
                        {community.map((partner) => (
                            <Section key={partner.title} className={styles.cardWrapper}>
                                <CommunityCard
                                    title={partner.title}
                                    logoAlt={partner.logoAlt}
                                    logoSrc={partner.logoSrc}
                                    description={partner.description}
                                    links={partner.links}
                                />
                            </Section>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
