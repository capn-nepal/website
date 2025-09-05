import React from 'react';
import {
    _cs,
    compareDate,
} from '@togglecorp/fujs';

import Card from '#components/Card';
import Link from '#components/Link';
import Section from '#components/Section';
import data from '#data/staticData.json';
import { type AllDataQuery } from '#generated/types/graphql';

import styles from './styles.module.css';

const description = 'Explore our in-depth reports and publications, highlighting key initiatives, research, and advocacy that shape the fight for equal citizenship rights.';

type Reports = NonNullable<NonNullable<AllDataQuery['reports']>['results']>;

interface Props {
    className?: string;
}

export default function Reports(props: Props) {
    const { className } = props;
    const allReportsData = data.reports.results as unknown as Reports;
    const sortedReports = allReportsData
        .sort((a, b) => compareDate(a.publishedDate, b.publishedDate));
    const limitedItems = sortedReports.slice(0, 3);

    if (limitedItems?.length === 0) {
        return null;
    }

    return (
        <Section className={_cs(className, styles.reports)}>
            <div className={styles.content}>
                <div className={styles.wrapper}>
                    <div className={styles.leftContainer}>
                        {limitedItems?.map((item) => (
                            <div
                                key={item.id}
                                className={styles.img}
                            >
                                <Card
                                    className={styles.image}
                                    title={item.title}
                                    image={item.coverImage?.url}
                                    link={item.reportFile?.url}
                                    headingSize="extraSmall"
                                    isExternalLink
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.rightContainer}>
                    <p className={styles.description}>
                        {description}
                    </p>
                    <Link
                        href="/resources/reports/"
                        showIcon
                    >
                        See All Reports
                    </Link>
                </div>
            </div>
        </Section>
    );
}
