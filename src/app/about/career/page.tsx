import Banner from '#components/Banner';
import Heading from '#components/Heading';
import Page from '#components/Page';
import Section from '#components/Section';
import data from '#data/staticData.json';
import { type AllDataQuery } from '#generated/types/graphql';
import careerImage from '#public/career.jpg';

import LifeCapn from './LifeCapn';
import VacancyCard from './VacancyCard';

import styles from './page.module.css';

type Vacancies = NonNullable<NonNullable<AllDataQuery['jobVacancies']>['results']>;

export default function Career() {
    const allVacanciesData = data.jobVacancies.results as unknown as Vacancies;
    return (
        <Page
            className={styles.career}
            contentClassName={styles.careerContent}
        >
            <Banner
                eyebrowHeading="CAREER"
                heading="Work with us"
                bannerImageSrc={careerImage}
            />
            <Section>
                <Heading size="extraLarge">
                    Open Vacancies
                </Heading>
                {allVacanciesData.length > 0 ? (
                    <div className={styles.openVacancy}>
                        {allVacanciesData.map((item) => (
                            <VacancyCard
                                className={styles.card}
                                key={item.id}
                                position={item.position.id}
                                deadline={item.deadline}
                                applicantsCount={item.numberOfVacancies}
                                link={`/about/career/${item.id}`}
                            />
                        ))}
                    </div>
                ) : (
                    <div className={styles.noVacancy}>
                        <Heading size="large">
                            There are no active vacancies at the moment.
                        </Heading>
                    </div>
                )}
            </Section>
            <LifeCapn />
        </Page>
    );
}
