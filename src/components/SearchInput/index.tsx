import React from 'react';
import { _cs } from '@togglecorp/fujs';

import styles from './styles.module.css';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    contentClassName?: string;
    icon?: React.ReactNode;
    placeholder?: string;
}

export default function SearchInput(props: Props) {
    const {
        className,
        contentClassName,
        icon,
        placeholder,
        ...inputProps
    } = props;

    return (
        <div className={_cs(styles.searchInputContainer, className)}>
            <div className={_cs(styles.content, contentClassName)}>
                {icon && (
                    <div className={styles.iconWrapper}>
                        {icon}
                    </div>
                )}
                <input
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...inputProps}
                    className={_cs(styles.searchInput)}
                    placeholder={placeholder}
                />
            </div>
        </div>
    );
}
