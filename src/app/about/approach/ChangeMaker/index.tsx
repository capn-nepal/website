import React from 'react';
import {
    _cs,
    isDefined,
} from '@togglecorp/fujs';

import Heading from '#components/Heading';
import Section from '#components/Section';
import data from '#data/staticData.json';
import { type AllDataQuery } from '#generated/types/graphql';

import CommunityCard from './CommunityCard';

import styles from './styles.module.css';

type ChangeMakers = NonNullable<NonNullable<AllDataQuery['changemakers']>['results']>

interface Props {
    className?: string;
}

export default function ChangeMaker(props: Props) {
    const { className } = props;
    const changemakers = (data.changemakers.results ?? []) as unknown as ChangeMakers;

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
                        {changemakers.map((partner) => (
                            <Section key={partner.id} className={styles.cardWrapper}>
                                <CommunityCard
                                    title={partner.name}
                                    logoAlt={partner.logo?.name}
                                    logoSrc={partner.logo?.url}
                                    description={partner.description}
                                    links={[
                                        partner.facebookLink ? {
                                            label: 'Facebook',
                                            url: partner.facebookLink,
                                        } : undefined,
                                        partner.linkdinLink ? {
                                            label: 'LinkedIn',
                                            url: partner.linkdinLink,
                                        } : undefined,
                                        partner.websiteLink ? {
                                            label: 'Website',
                                            url: partner.websiteLink,
                                        } : undefined,
                                    ].filter(isDefined)}
                                />
                            </Section>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
