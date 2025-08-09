import React from 'react';
import {
    IoLocationOutline,
    IoMailOutline,
} from 'react-icons/io5';

import Banner from '#components/Banner';
import Heading from '#components/Heading';
import Page from '#components/Page';
import Section from '#components/Section';
import ContactUsImage from '#public/contact.png';

import styles from './page.module.css';

const contactUsText = 'We welcome your inquiries, feedback, and partnership ideas. Contact us and let’s work together for change.';

export default function Contact() {
    return (
        <Page contentClassName={styles.contact}>
            <Banner
                bannerImageSrc={ContactUsImage}
                eyebrowHeading="CONTACT US"
                heading={(
                    <>
                        Have a Question?
                        <span>Get in Touch</span>
                    </>
                )}
            />
            <Section>
                <div className={styles.wrapper}>
                    <div className={styles.leftCard}>
                        <Heading
                            className={styles.heading}
                            size="large"
                        >
                            Contact Details
                        </Heading>
                        <div className={styles.item}>
                            <IoMailOutline className={styles.icon} />
                            <a
                                className={styles.text}
                                href="mailto:info.contact@capn.org"
                            >
                                info.contact@capn.org
                            </a>
                        </div>
                        <div className={styles.item}>
                            <IoLocationOutline className={styles.icon} />
                            <span className={styles.text}>
                                Sanepa, Lalitpur
                            </span>
                        </div>
                        <span className={styles.text}>
                            {contactUsText}
                        </span>
                    </div>
                    <iframe
                        className={styles.map}
                        title="capn location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.0236730957395!2d85.30460149999999!3d27.6856632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1969819c0b33%3A0x72563f6f24cd82f6!2sCitizenship%20Affected%20People&#39;s%20Network!5e0!3m2!1sen!2snp!4v1749636831074!5m2!1sen!2snp"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                    />
                </div>
            </Section>
        </Page>
    );
}
