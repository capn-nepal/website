import React from 'react';
import { IoOpenOutline } from 'react-icons/io5';
import { _cs } from '@togglecorp/fujs';
import NextLink, { type LinkProps as NextLinkProps } from 'next/link';

import styles from './styles.module.css';

type Variant = 'transparent' | 'button' | 'buttonTransparent' | 'icon' | 'underline';
const variantToStyleMap: {
    [key in Variant]: string | undefined;
} = {
    transparent: undefined,
    button: styles.button,
    underline: styles.underline,
    buttonTransparent: styles.buttonTransparent,
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
        ...rest
    } = props;

    return (
        <NextLink
            className={_cs(
                className,
                styles.link,
                variantToStyleMap[variant],
            )}
            // eslint-disable-next-line
            {...rest}
            title={title ? String(title) : undefined}
            href={href}
        >
            {children}
            {showIcon && <IoOpenOutline className={styles.icon} />}
        </NextLink>
    );
}

export default Link;
