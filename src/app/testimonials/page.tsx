import React from 'react';
import { type StaticImageData } from 'next/image';

import Banner from '#components/Banner';
import Page from '#components/Page';
import AboutUsImage from '#public/aboutUsImage.jpg';

import Testimonial from './Testimonial';

import styles from './page.module.css';

const markdownContent = `
This is a **Markdown** document stored in a JavaScript variable.  
This is a **Markdown** document stored in a JavaScript variable.
This is a **Markdown** document stored in a JavaScript variable.

## Features<br>
- Easy to read
- Easy to write
- Supports _formatting_
`;

const testimonials: {
    title: string;
    description: string;
    author: string;
    image: StaticImageData;
}[] = [
    {
        title: 'WITHOUT CITIZENSHIP, SIMPLE THINGS BECAME COMPLICATED — OPENING A BANK ACCOUNT, GETTING A SIM CARD, EVEN TRAVELING WITHIN MY OWN COUNTRY.',
        image: AboutUsImage,
        description: markdownContent,
        author: 'Subina Maharjan',
    },
];

export default function Testimonials() {
    return (
        <Page
            className={styles.testimonials}
            contentClassName={styles.testimonialsContent}
        >
            <Banner
                // NOTE: We need to replace with the real image as mentioned in figma
                bannerImageSrc={AboutUsImage}
                eyebrowHeading="Voices of Change"
                heading={(
                    <>
                        Voices from Our Community:
                        <br />
                        <span>Stories of Struggle, Strength & Change</span>
                    </>
                )}
            />
            {testimonials.map((item) => (
                <Testimonial
                    key={item.title}
                    title={item.title}
                    image={AboutUsImage}
                    description={item.description}
                    author={item.author}
                />
            ))}
        </Page>
    );
}
