import Banner from '#components/Banner';
import Page from '#components/Page';
import Section from '#components/Section';
import AboutUsImage from '#public/aboutUsImage.jpg';

import { vacancies } from '../../dummyData';
import LifeCapn from './LifeCapn';
import VacancyCard from './VacancyCard';

import styles from './page.module.css';

export default function Career() {
    return (
        <Page className={styles.career}>
            <Banner
                eyebrowHeading="CAREER"
                heading="Work with us"
                bannerImageSrc={AboutUsImage}
            />
            <Section>
                <div className={styles.openVacancy}>
                    {vacancies.map((item) => (
                        <VacancyCard
                            className={styles.card}
                            key={item.id}
                            title={item.title}
                            summary={item.summary}
                            deadline={item.deadline}
                            applicantsCount={item.applicantsCount}
                            link={`/about/career/${item.id}`}
                        />
                    ))}
                </div>
            </Section>
            <LifeCapn />
        </Page>
    );
}
