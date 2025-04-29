'use client';

import React, {
    useCallback,
    useState,
} from 'react';
import { MdMenu } from 'react-icons/md';
import { _cs } from '@togglecorp/fujs';
import Image from 'next/image';

import Button from '#components/Button';
import Link from '#components/Link';
import logo from '#public/logo.png';

import styles from './styles.module.css';

interface Props {
    className?: string;
}

export default function Navbar(props: Props) {
    const {
        className,
    } = props;

    const [isNavShown, setNavShown] = useState(false);

    const handleNavToggle = useCallback(() => {
        setNavShown((oldVal) => !oldVal);
    }, []);

    return (
        <div className={_cs(className, styles.navbar)}>
            <div className={styles.content}>
                <div className={styles.imageContainer}>
                    <Image
                        className={styles.image}
                        src={logo}
                        alt="logo"
                    />
                </div>
                <div className={_cs(isNavShown && styles.navShown, styles.links)}>
                    <p>About</p>
                    <p>Work</p>
                    <p>Resources</p>
                    <p>Updates</p>
                    <p>Contact</p>
                </div>
                <Link
                    className={styles.supportLink}
                    href="/"
                    variant="reverse"
                >
                    Support Us
                </Link>
                <div className={styles.rightContainer}>
                    <Button
                        className={_cs(styles.menu)}
                        name="toggle"
                        variant="transparent"
                        onClick={handleNavToggle}
                    >
                        <MdMenu />
                    </Button>
                </div>
            </div>
        </div>
    );
}
