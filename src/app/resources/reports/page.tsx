import Banner from '#components/Banner';
import Card from '#components/Card';
import Page from '#components/Page';
import Section from '#components/Section';
import data from '#data/staticData.json';
import { type AllDataQuery } from '#generated/types/graphql';

import styles from './page.module.css';

type Reports = NonNullable<NonNullable<AllDataQuery['reports']>['results']>;

export default function Reports() {
    const allReportsData = data?.reports?.results as unknown as Reports;

    const hasReports = allReportsData && allReportsData.length > 0;

    return (
        <Page className={styles.reports}>
            <Banner
                withoutBackground
                heading="Research, Reports and Findings"
            />
            <Section
                // FIXME: Fix the spacing between banner and section content
                className={styles.section}
                contentClassName={styles.reportsSection}
            >
                {hasReports ? (
                    allReportsData.map((item) => (
                        <Card
                            className={styles.card}
                            key={item.id}
                            // image={item.image}
                            title={item.title}
                            date={item.publishedDate}
                            link={item.reportFile?.url}
                            isExternalLink
                        />
                    ))
                ) : (
                    <div className={styles.noReports}>No reports available at the moment.</div>
                )}
            </Section>
        </Page>
    );
}
