import React from 'react';
import { _cs } from '@togglecorp/fujs';

import Heading from '#components/Heading';
import Image from '#components/ImageWrapper';
import Link from '#components/Link';
import comLogo from '#public/partnerLogos/com.png';
import familyLogo from '#public/partnerLogos/family.png';
import isiLogo from '#public/partnerLogos/isi.png';
import nfaLogo from '#public/partnerLogos/nfa.png';
import scrLogo from '#public/partnerLogos/scr.jpg';
import statelessLogo from '#public/partnerLogos/stateless.png';

import styles from './styles.module.css';

const logos = [
    { src: isiLogo, link: 'https://www.institutesi.org/resources' },
    { src: scrLogo, link: 'https://statelessnessandcitizenshipreview.com/index.php/journal/issue/archive' },
    { src: familyLogo, link: 'https://familyfrontiers.org/resources/research/' },
    { src: nfaLogo, link: 'https://nationalityforall.org/resource/' },
    { src: comLogo, link: 'https://councilofminorities.org/publication-resources/' },
    { src: statelessLogo, link: 'https://statelessness.uwazi.io/library/' },
];

interface Props {
    className?: string;
}

export default function Community(props: Props) {
    const { className } = props;

    return (
        <div className={_cs(className, styles.community)}>
            <div className={styles.content}>
                <Heading
                    className={styles.heading}
                    size="extraLarge"
                >
                    Advocacy Beyond Borders
                    <br />
                    <p>
                        We’re proud to stand with partners whose work reflect a shared vision.
                        Learn more about their journeys and how we work together.
                    </p>
                </Heading>
                <div className={styles.marqueeWrapper}>
                    <div className={styles.marqueeContent}>
                        {[...logos, ...logos].map((logo, index) => (
                            <div key={String(logo)} className={styles.item}>
                                <Link
                                    href={logo.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Image
                                        className={styles.logo}
                                        src={logo.src}
                                        alt={`partner-logo-${index}`}
                                    />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
