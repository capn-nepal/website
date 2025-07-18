import ArticleBody from '#components/ArticleBody';
import Banner from '#components/Banner';
import Page from '#components/Page';
import Section from '#components/Section';
import ShareSection from '#components/ShareSection';
import data from '#data/staticData.json';
import { type AllDataQuery } from '#generated/types/graphql';
import careerImage from '#public/career.jpg';

import styles from './page.module.css';

type Vacancies = NonNullable<NonNullable<AllDataQuery['jobVacancies']>['results']>;

async function getVacancies() {
    return data.jobVacancies.results as unknown as Vacancies;
}

/* eslint-disable react-refresh/only-export-components */
export async function generateStaticParams() {
    const vacancies = await getVacancies();
    if (!vacancies.length) {
        return [{ id: 'empty' }];
    }
    return vacancies.map((item) => ({ id: item.id }));
}

export default async function CareerDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const vacancies = await getVacancies();

    const vacancyDetails = vacancies?.find((item) => item.id === id);

    return (
        <Page contentClassName={styles.careerItem}>
            <Banner
                eyebrowHeading={`Deadline: ${vacancyDetails?.deadline}, ${vacancyDetails?.position.employmentType}`}
                heading={vacancyDetails?.position.name}
                bannerImageSrc={careerImage}
            />
            <Section
                className={styles.section}
                contentClassName={styles.sectionContent}
            >
                <ArticleBody
                    content={vacancyDetails?.position?.description}
                />
                <ShareSection title={vacancyDetails?.position.name ?? ''} />
            </Section>
        </Page>
    );
}
