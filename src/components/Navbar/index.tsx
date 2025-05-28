'use client';

import React, {
    useCallback,
    useState,
} from 'react';
import { MdMenu } from 'react-icons/md';
import { _cs } from '@togglecorp/fujs';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

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

    const pathname = usePathname();

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
                    <Link
                        href="/about"
                        variant="navigation"
                        active={pathname === '/about/'}
                    >
                        About
                    </Link>
                    <Link
                        href="/"
                        variant="navigation"
                        active={pathname === '/work/'}
                    >
                        Work
                    </Link>
                    <Link
                        href="/"
                        variant="navigation"
                        active={pathname === '/resources/'}
                    >
                        Resources
                    </Link>
                    <Link
                        href="/"
                        variant="navigation"
                        active={pathname === '/updates/'}
                    >
                        Updates
                    </Link>
                    <Link
                        href="/"
                        variant="navigation"
                        active={pathname === '/contact/'}
                    >
                        Contact
                    </Link>
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
