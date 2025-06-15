import ArticleBody from '#components/ArticleBody';
import Banner from '#components/Banner';
import Page from '#components/Page';
import Section from '#components/Section';
import AboutUsImage from '#public/aboutUsImage.jpg';

import { vacancies as staticVacancies } from '../../../dummyData';

async function getVacancies() {
    return staticVacancies;
}

export async function generateStaticParams() {
    const vacancies = await getVacancies();
    return vacancies.map((item) => ({ id: item.id }));
}

export default async function CareerDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const vacancies = await getVacancies();

    const vacancyDetails = vacancies?.find((item) => item.id === id);

    return (
        <Page>
            <Banner
                eyebrowHeading="CAREER"
                heading="Work with us"
                bannerImageSrc={AboutUsImage}
            />
            <Section
                heading={vacancyDetails?.title}
            >
                <ArticleBody
                    content={vacancyDetails?.description}
                />
            </Section>
        </Page>
    );
}
