import Banner from '#components/Banner';
import Card from '#components/Card';
import Page from '#components/Page';
import Section from '#components/Section';
import AboutUsImage from '#public/aboutUsImage.jpg';

import styles from './page.module.css';

// FIXME: Use this from query later
const reports = [
    {
        id: 1,
        image: AboutUsImage,
        title: 'Study on Implementation of Citizenship Laws in Nepal',
        date: '2024-08-15',
        fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    },
    {
        id: 2,
        image: AboutUsImage,
        title: 'School Outreach Program Comprehensive Report',
        date: '2023-12-01',
        fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    },
    {
        id: 3,
        image: AboutUsImage,
        title: 'Annual Report Fiscal Year 2021 to 2023',
        date: '2023-07-10',
        fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    },
    {
        id: 4,
        image: AboutUsImage,
        title: 'Women Empowerment and Policy Implementation Review',
        date: '2024-05-25',
        fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    },
    {
        id: 5,
        image: AboutUsImage,
        title: 'Climate Resilience in Rural Nepal: Challenges and Insights',
        date: '2024-11-30',
        fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    },
];

export default function Reports() {
    return (
        <Page contentClassName={styles.reports}>
            <Banner
                heading="Research, Reports and Findings"
            />
            <Section
                // FIXME: Fix the spacing between banner and section content
                contentClassName={styles.section}
            >
                {reports?.map((item) => (
                    <Card
                        className={styles.card}
                        key={item.id}
                        image={item.image}
                        title={item.title}
                        date={item.date}
                        link={item.fileUrl}
                        isExternalLink
                    />
                ))}
            </Section>
        </Page>
    );
}
