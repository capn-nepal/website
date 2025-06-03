import Image from 'next/image';

import Heading from '#components/Heading';
import Page from '#components/Page';
import AboutUsImage from '#public/aboutUsImage.jpg';

import styles from './page.module.css';

export default function Journey() {
    return (
        <Page>
            <div className={styles.banner}>
                <Heading className={styles.heading} size="superLarge">
                    Years of Action, Voices of Change:
                    <br />
                    <span className={styles.yellow}>CAPN’S Journey</span>
                </Heading>
            </div>
            <div className={styles.content}>
                {/*
                <div className={styles.timelineNavPanel}>
                    timeline
                </div>
                */}
                <div className={styles.timelineEventCard}>
                    <div className={styles.timelineCardList}>
                        <div className={styles.card}>
                            <div className={styles.year}>
                                2013
                            </div>
                            <div className={styles.description}>
                                Deepti Gurung’s fight for her
                                daughters’ citizenship brought
                                her to FWLD, where lawyers helped
                                file a Supreme Court case and built strong bonds.
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.year}>
                                2013
                            </div>
                            <div className={styles.description}>
                                Deepti Gurung started the Facebook page
                                &quot; Citizenship in the Name of Mother &quot; to
                                gather support and public opinion on
                                citizenship issues, sparking her activism journey.
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.year}>
                                2014
                            </div>
                            <div className={styles.description}>
                                Deepti Gurung co-organized and participated in
                                Kathmandu’s 2000 Rising for Citizenship campaign
                                organized by the Youth Network on Civil Society
                                Organization(YNCSO) and the signature campaign
                                in 13 districts of Nepal.
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.year}>
                                2014
                            </div>
                            <div className={styles.description}>
                                Deepti Gurung participated in the Human Chain
                                protest against the discriminatory citizenship
                                provisions agreed by the drafting committee of
                                the Constituent Assembly.
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.year}>
                                2015
                            </div>
                            <div className={styles.description}>
                                Deepti Gurung was part of the delegation of FWLD
                                that submitted a memorandum to former President
                                Dr. Ram Baran Yadav, demanding citizenship through mothers.
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.year}>
                                2015
                            </div>
                            <div className={styles.description}>
                                Citizenship Affected People’s Network was formed
                                as a loose network of affected people with the
                                support of FWLD.
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.year}>
                                2017
                            </div>
                            <div className={styles.description}>
                                After a long and tremendous struggle, the Supreme
                                Court ordered in  favor of citizenship in
                                the name of mother for Neha Gurung, Deepti
                                Gurung’s elder daughter.
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.year}>
                                2019
                            </div>
                            <div className={styles.description}>
                                Attended the World Conference on Statelessness,
                                where Deepti Gurung and Neha Gurung co-created
                                the “Free Neha” artwork, raising awareness about
                                the challenges faced by stateless children like her daughter.
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.year}>
                                2021
                            </div>
                            <div className={styles.description}>
                                CAPN was officially registered as an NGO, Deepti
                                Gurung took the position of Executive Director
                                to continue to advocate for gender equal citizenship
                                laws in Nepal.
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.year}>
                                2024
                            </div>
                            <div className={styles.description}>
                                Deepti Gurung, CAPN’s Executive Director and
                                Founder was honored with the Women’s Refugee
                                Commission’s prestigious Voices of Courage Award.
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.year}>
                                2024
                            </div>
                            <div className={styles.description}>
                                Deepti Gurung, CAPN’s Executive Director and
                                Founder was honored with the prestigious
                                UNHCR Nansen Refugee Award.
                            </div>
                        </div>
                    </div>
                    <div className={styles.imageList}>
                        <Image
                            className={styles.timelineImage}
                            src={AboutUsImage}
                            alt="timeline image"
                        />
                        <Image
                            className={styles.timelineImage}
                            src={AboutUsImage}
                            alt="timeline image"
                        />
                        <Image
                            className={styles.timelineImage}
                            src={AboutUsImage}
                            alt="timeline image"
                        />
                        <Image
                            className={styles.timelineImage}
                            src={AboutUsImage}
                            alt="timeline image"
                        />
                        <Image
                            className={styles.timelineImage}
                            src={AboutUsImage}
                            alt="timeline image"
                        />
                        <Image
                            className={styles.timelineImage}
                            src={AboutUsImage}
                            alt="timeline image"
                        />
                        <Image
                            className={styles.timelineImage}
                            src={AboutUsImage}
                            alt="timeline image"
                        />
                        <Image
                            className={styles.timelineImage}
                            src={AboutUsImage}
                            alt="timeline image"
                        />
                        <Image
                            className={styles.timelineImage}
                            src={AboutUsImage}
                            alt="timeline image"
                        />
                        <Image
                            className={styles.timelineImage}
                            src={AboutUsImage}
                            alt="timeline image"
                        />
                        <Image
                            className={styles.timelineImage}
                            src={AboutUsImage}
                            alt="timeline image"
                        />
                    </div>
                </div>
            </div>
        </Page>
    );
}
