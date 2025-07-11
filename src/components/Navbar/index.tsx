'use client';

import React, {
    useCallback,
    useState,
} from 'react';
import { MdMenu } from 'react-icons/md';
import { _cs } from '@togglecorp/fujs';
import { usePathname } from 'next/navigation';

import Button from '#components/Button';
import Heading from '#components/Heading';
import ImageWrapper from '#components/ImageWrapper';
import Link from '#components/Link';
import logo from '#public/logo.png';

import PopupButton from '../PopupButton';

import styles from './styles.module.css';

const links = [
    {
        label: 'About',
        link: '/about',
        children: [
            {
                label: 'Approach',
                link: '/approach/',
            },
            {
                label: 'Journey',
                link: '/journey/',
            },
            {
                label: 'Team',
                link: '/team/',
            },
            {
                label: 'Career',
                link: '/career/',
            },
        ],
    },
    {
        label: 'Work',
        link: '/work',
        children: [
            {
                label: 'Pillar',
                link: '/pillar/',
            },
            {
                label: 'Events',
                link: '/events/',
            },
        ],
    },
    {
        label: 'Resources',
        link: '/resources',
        children: [
            {
                label: 'Reports',
                link: '/reports/',
            },
            {
                label: 'Gallery',
                link: '/gallery/',
            },
            {
                label: 'Videos',
                link: '/videos/',
            },
        ],
    },
    {
        label: 'Updates',
        link: '/updates/',
    },
    {
        label: 'Contact',
        link: '/contact/',
    },
];

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
                        <ImageWrapper
                            className={styles.image}
                            src={logo}
                            alt="logo"
                        />
                    </Link>
                </div>
                <div className={_cs(isNavShown && styles.navShown, styles.links)}>
                    {links?.map((item) => (item.children ? (
                        <PopupButton
                            key={item.link}
                            persistent={false}
                            label={item.label}
                        >
                            {item.children.map((child) => (
                                <Link
                                    key={child.link}
                                    className={styles.popupLink}
                                    href={`${item.link}${child.link}`}
                                    variant="navigation"
                                    active={pathname === `${item.link}${child.link}`}
                                >
                                    {child.label}
                                </Link>
                            ))}
                        </PopupButton>
                    ) : (
                        <Link
                            className={styles.link}
                            key={item.link}
                            href={item.link}
                            variant="navigation"
                            active={pathname === item.link}
                        >
                            {item.label}
                        </Link>
                    )))}
                </div>
                <Link
                    className={styles.supportLink}
                    href="/support/"
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
            <div className={_cs(isNavShown && styles.navShown, styles.drawer)}>
                {links?.map((item) => (item.children ? (
                    <div key={item.link}>
                        <Heading size="small">{item.label}</Heading>
                        {item.children.map((child) => (
                            <Link
                                key={child.link}
                                className={styles.link}
                                href={`${item.link}${child.link}`}
                                variant="navigation"
                                active={pathname === `${item.link}${child.link}`}
                            >
                                {child.label}
                            </Link>
                        ))}
                    </div>
                ) : (
                    <Link
                        key={item.link}
                        href={item.link}
                        className={styles.link}
                        variant="navigation"
                        active={pathname === item.link}
                    >
                        {item.label}
                    </Link>
                )))}
                <Link
                    className={styles.link}
                    href="/support/"
                    variant="reverse"
                >
                    Support Us
                </Link>
            </div>
        </div>
    );
}
