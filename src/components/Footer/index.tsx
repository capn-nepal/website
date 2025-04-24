import React from 'react';
import {
    IoLogoFacebook,
    IoLogoInstagram,
    IoLogoLinkedin,
    IoLogoXbox,
    IoLogoYoutube,
} from 'react-icons/io5';
import { _cs } from '@togglecorp/fujs';
import Image from 'next/image';

import Heading from '#components/Heading';
import logo from '#public/logo.png';

import styles from './styles.module.css';

const currentYear = new Date().getFullYear();
const capnDescription = 'Citizenship Affected People’s Network (CAPN) is dedicated to advocating for equal citizenship rights in Nepal. Through legal support, awareness campaigns, and community initiatives, we strive to end discriminatory laws and ensure legal identity for all.';

interface Props {
    className?: string;
}

export default function Footer(props: Props) {
    const {
        className,
    } = props;

    return (
        <div className={_cs(className, styles.footer)}>
            <div className={styles.topContainer}>
                <div className={styles.leftContainer}>
                    <Image
                        className={styles.image}
                        src={logo}
                        alt="logo"
                    />
                    <div className={styles.content}>
                        <Heading
                            size="extraSmall"
                            className={styles.heading}
                        >
                            CAPN
                        </Heading>
                        <p className={styles.description}>
                            {capnDescription}
                        </p>
                    </div>
                </div>
                <div className={styles.rightContainer}>
                    <Heading
                        className={styles.heading}
                        size="superLarge"
                    >
                        Get Connected!
                    </Heading>
                    <div className={styles.linkGroups}>
                        <div className={styles.linkGroup}>
                            <Heading
                                className={styles.heading}
                                size="extraSmall"
                            >
                                Links
                            </Heading>
                            <div className={styles.links}>
                                <p>About</p>
                                <p>Work</p>
                                <p>Resources</p>
                                <p>Updates</p>
                                <p>Contact</p>
                            </div>
                        </div>
                        <div className={styles.linkGroup}>
                            <Heading
                                className={styles.heading}
                                size="extraSmall"
                            >
                                Contact Us
                            </Heading>
                            <div className={styles.icons}>
                                <IoLogoInstagram />
                                <IoLogoFacebook />
                                <IoLogoYoutube />
                                <IoLogoLinkedin />
                                <IoLogoXbox />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.mid} />
            <div className={styles.bottomContainer}>
                {`@Copyright ${currentYear}. CAPN Nepal. All rights reserved.`}
            </div>
        </div>
    );
}
