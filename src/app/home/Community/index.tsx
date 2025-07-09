import React from 'react';
import { _cs } from '@togglecorp/fujs';
import Image from 'next/image';

import Heading from '#components/Heading';
import comLogo from '#public/partnerLogos/com.png';
import familyLogo from '#public/partnerLogos/family.png';
import isiLogo from '#public/partnerLogos/isi.png';
import nfaLogo from '#public/partnerLogos/nfa.png';
import scrLogo from '#public/partnerLogos/scr.jpg';
import statelessLogo from '#public/partnerLogos/stateless.png';

import styles from './styles.module.css';

const logos = [
    isiLogo,
    scrLogo,
    familyLogo,
    nfaLogo,
    comLogo,
    statelessLogo,
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
                    Meet our community of changemakers
                    <br />
                    <p>
                        We’re proud to stand with partners whose stories reflect a shared vision.
                        Learn more about their journeys and how we work together.
                    </p>
                </Heading>
                <div className={styles.marqueeWrapper}>
                    <div className={styles.marqueeContent}>
                        {[...logos, ...logos].map((logo, index) => (
                            <div key={String(logo)} className={styles.item}>
                                <Image
                                    className={styles.logo}
                                    src={logo}
                                    alt={`partner-logo-${index}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
