import React from 'react';
import { type StaticImageData } from 'next/image';

import ImageWrapper from '#components/ImageWrapper';
import Link from '#components/Link';

import styles from './styles.module.css';

interface Props {
  title: string;
  className?: string;
  logoSrc?: string | StaticImageData;
  logoAlt?: string;
  description: string;
  links?: {
    label: string;
    url: string;
  }[];
}

export default function CommunityCard(props: Props) {
    const {
        title,
        className,
        logoAlt,
        logoSrc,
        description,
        links,
    } = props;

    return (
        <div className={`${styles.card} ${className || ''}`}>
            {logoSrc && (
                <div className={styles.logo}>
                    <ImageWrapper
                        src={logoSrc}
                        alt={logoAlt || ''}
                    />
                </div>
            )}
            <div className={styles.content}>
                <p className={styles.description}>
                    {title && (
                        <strong>
                            {title}
                            {' '}
                        </strong>
                    )}
                    {description}
                </p>
                {links && links.length > 0 && (
                    <div className={styles.links}>
                        {links.map((link) => (
                            <div key={link.url} className={styles.link}>
                                <span className={styles.linkLabel}>
                                    {link.label}
                                    :
                                </span>
                                <Link
                                    className={styles.linkUrl}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variant="navigation"
                                >
                                    {link.url}
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
