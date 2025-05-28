import React from 'react';
import { HiArrowUpRight } from 'react-icons/hi2';
import { _cs } from '@togglecorp/fujs';
import NextLink, { type LinkProps as NextLinkProps } from 'next/link';

import styles from './styles.module.css';

type Variant = 'navigation' | 'transparent' | 'button' | 'buttonTransparent' | 'icon' | 'underline' | 'reverse';
const variantToStyleMap: {
    [key in Variant]: string | undefined;
} = {
    navigation: styles.navigation,
    transparent: undefined,
    button: styles.button,
    underline: styles.underline,
    buttonTransparent: styles.buttonTransparent,
    reverse: styles.reverse,
    icon: styles.icon,
};

interface Props extends Omit<NextLinkProps, 'locale'> {
    children?: React.ReactNode;
    className?: string;
    locale?: string;
    rel?: string;
    target?: string;
    variant?: Variant;
    title?: React.ReactNode;
    showIcon?: boolean;
    active?: boolean;
}

// NOTE: this does not support relative links

function Link(props: Props) {
    const {
        children,
        variant = 'transparent',
        className,
        title,
        href,
        showIcon,
        active,
        ...rest
    } = props;

    return (
        <NextLink
            className={_cs(
                className,
                styles.link,
                variantToStyleMap[variant],
                active && styles.active,
            )}
            // eslint-disable-next-line
            {...rest}
            title={title ? String(title) : undefined}
            href={href}
        >
            {children}
            {showIcon && <HiArrowUpRight className={styles.icon} />}
        </NextLink>
    );
}

export default Link;
