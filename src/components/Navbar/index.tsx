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

import PopupButton from '../PopupButton';

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
                    <Link
                        href="/"
                    >
                        <Image
                            className={styles.image}
                            src={logo}
                            alt="logo"
                        />
                    </Link>
                </div>
                <div className={_cs(isNavShown && styles.navShown, styles.links)}>
                    <PopupButton
                        persistent={false}
                        label="About"
                    >
                        <Link
                            className={styles.popupLink}
                            href="/about/approach"
                            variant="navigation"
                            active={pathname === '/about/approach/'}
                        >
                            Approach
                        </Link>
                        <Link
                            className={styles.popupLink}
                            href="/about/journey"
                            variant="navigation"
                            active={pathname === '/about/journey/'}
                        >
                            Journey
                        </Link>
                        <Link
                            className={styles.popupLink}
                            href="/about/team"
                            variant="navigation"
                            active={pathname === '/about/team'}
                        >
                            Members
                        </Link>
                        <Link
                            className={styles.popupLink}
                            href="/about/career"
                            variant="navigation"
                            active={pathname === '/about/career/'}
                        >
                            Career
                        </Link>
                    </PopupButton>
                    <PopupButton
                        persistent={false}
                        label="Work"
                    >
                        <Link
                            className={styles.popupLink}
                            href="/work/pillar"
                            variant="navigation"
                            active={pathname === '/work/pillar/'}
                        >
                            Pillar
                        </Link>
                        <Link
                            className={styles.popupLink}
                            href="/work/events"
                            variant="navigation"
                            active={pathname === '/work/events/'}
                        >
                            Events
                        </Link>
                    </PopupButton>
                    <PopupButton
                        label="Resources"
                        persistent={false}
                    >
                        <Link
                            href="/resources/reports"
                            variant="navigation"
                            active={pathname === '/resources/reports/'}
                        >
                            Reports
                        </Link>
                        <Link
                            href="/resources/videos"
                            variant="navigation"
                            active={pathname === '/resources/videos'}
                        >
                            Videos
                        </Link>
                        <Link
                            href="/resources/gallery"
                            variant="navigation"
                            active={pathname === '/resources/gallery'}
                        >
                            Gallery
                        </Link>
                    </PopupButton>
                    <Link
                        href="/updates/"
                        variant="navigation"
                        active={pathname === '/updates/'}
                    >
                        Updates
                    </Link>
                    <Link
                        href="/contact/"
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
