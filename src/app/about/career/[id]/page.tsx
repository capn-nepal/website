import ArticleBody from '#components/ArticleBody';
import Banner from '#components/Banner';
import Page from '#components/Page';
import Section from '#components/Section';
import { jobVacancies as staticVacancies } from '#data/staticData.json';
import { type AllDataQuery } from '#generated/types/graphql';
import AboutUsImage from '#public/aboutUsImage.jpg';

type Vacancies = NonNullable<NonNullable<AllDataQuery['jobVacancies']>['results']>;

async function getVacancies() {
    return staticVacancies.results as unknown as Vacancies;
}

/* eslint-disable react-refresh/only-export-components */
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
                heading={vacancyDetails?.position.name}
            >
                <div>
                    {vacancyDetails?.deadline}
                </div>
                <div>
                    {vacancyDetails?.position.employmentType}
                </div>
                <ArticleBody
                    content={vacancyDetails?.description}
                />
            </Section>
        </Page>
    );
}
