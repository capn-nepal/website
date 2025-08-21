import Banner from '#components/Banner';
import Heading from '#components/Heading';
import Page from '#components/Page';
import Section from '#components/Section';

import styles from './page.module.css';

export default async function Support() {
    return (
        <Page className={styles.page}>
            <Banner
                withoutBackground
                heading="Your Contribution Makes a Difference"
                headingSize="extraLarge"
                eyebrowHeading="Support Our Mission"
            />
            <Section
                className={styles.supportWrapper}
                contentClassName={styles.supportContent}
            >
                <Heading size="small">Your Support Makes a Difference</Heading>
                <p>
                    Your contribution helps us advocate for gender-equal
                    citizenship laws, provide safe spaces for affected families,
                    and raise awareness for a more just and inclusive Nepal.
                </p>
                <p>
                    For more information on how your donation
                    can create impact, please contact us at:
                    <a href="mailto:info@capnnepal.org.np">info@capnnepal.org.np</a>
                </p>
            </Section>
        </Page>
    );
}
