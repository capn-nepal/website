import React from 'react';
import { _cs } from '@togglecorp/fujs';
import Image from 'next/image';

import Heading from '#components/Heading';
import communityImage from '#public/community.jpg';
import comLogo from '#public/partnerLogos/com.png';
import familyLogo from '#public/partnerLogos/family.png';
import isiLogo from '#public/partnerLogos/isi.png';
import nfaLogo from '#public/partnerLogos/nfa.png';
import scrLogo from '#public/partnerLogos/scr.jpg';
import statelessLogo from '#public/partnerLogos/stateless.png';

import styles from './styles.module.css';

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
                    Meet our community of changemakers:
                    <br />
                    <span>Advocacy Beyond Borders</span>
                </Heading>
                <div className={styles.gridContainer}>
                    <div className={_cs(styles.item, styles.left)}>
                        <Image
                            className={styles.logo}
                            src={isiLogo}
                            alt="partnerLogo"
                        />
                    </div>
                    <div className={_cs(styles.item, styles.item2)}>
                        <Image
                            className={styles.communityImage}
                            src={communityImage}
                            alt="community-image"
                        />
                    </div>
                    <div className={_cs(styles.item, styles.right)}>
                        <Image
                            className={styles.logo}
                            src={scrLogo}
                            alt="partnerLogo"
                        />
                    </div>
                    <div className={_cs(styles.item, styles.left, styles.center)}>
                        <Image
                            className={styles.logo}
                            src={familyLogo}
                            alt="partnerLogo"
                        />
                    </div>
                    <div className={_cs(styles.item, styles.right, styles.center)}>
                        <Image
                            className={styles.logo}
                            src={nfaLogo}
                            alt="partnerLogo"
                        />
                    </div>
                    <div className={_cs(styles.item, styles.left)}>
                        <Image
                            className={styles.logo}
                            src={comLogo}
                            alt="partnerLogo"
                        />
                    </div>
                    <div className={_cs(styles.item, styles.right)}>
                        <Image
                            className={styles.logo}
                            src={statelessLogo}
                            alt="partnerLogo"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
