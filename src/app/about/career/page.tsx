import Banner from '#components/Banner';
import Heading from '#components/Heading';
import Page from '#components/Page';
import Section from '#components/Section';
import { jobVacancies } from '#data/staticData.json';
import { type AllDataQuery } from '#generated/types/graphql';
import AboutUsImage from '#public/aboutUsImage.jpg';

import LifeCapn from './LifeCapn';
import VacancyCard from './VacancyCard';

import styles from './page.module.css';

type Vacancies = NonNullable<NonNullable<AllDataQuery['jobVacancies']>['results']>;

export default function Career() {
    const allVacanciesData = jobVacancies.results as unknown as Vacancies;
    return (
        <Page className={styles.career}>
            <Banner
                eyebrowHeading="CAREER"
                heading="Work with us"
                bannerImageSrc={AboutUsImage}
            />
            <Section>
                <Heading size="extraLarge">
                    Open Vacancies
                </Heading>
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
            </Section>
            <LifeCapn />
        </Page>
    );
}
