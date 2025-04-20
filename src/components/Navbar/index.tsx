import React from 'react';
import { _cs } from '@togglecorp/fujs';
import Image from 'next/image';

import logo from '#public/logo.png';

import styles from './styles.module.css';

interface Props {
    className?: string;
}

export default function Navbar(props: Props) {
    const {
        className,
    } = props;

    return (
        <div className={_cs(className, styles.navbar)}>
            <div className={styles.content}>
                <Image
                    className={styles.image}
                    src={logo}
                    alt="logo"
                />
                <div className={styles.links}>
                    <p>About</p>
                    <p>Work</p>
                    <p>Resources</p>
                    <p>Updates</p>
                    <p>Contact</p>
                </div>
                Support Us
            </div>
        </div>
    );
}
