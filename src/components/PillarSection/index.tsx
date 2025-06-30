import {
    _cs,
    isDefined,
} from '@togglecorp/fujs';
import Image, { type StaticImageData } from 'next/image';

import Heading from '#components/Heading';
import Link from '#components/Link';
import Quote from '#public/quote.png';

import styles from './styles.module.css';

type LinkItem = {
    title: string;
    href: string;
    description: string;
};

type Props = {
    className?: string;
    headingClassName?: string;
    heading: string;
    imageSrc: string | StaticImageData;
    pillarSrc: string | StaticImageData;
    headingDescription: string;
    imageAlt: string;
    quote?: string;
    attribution: React.ReactNode;
    links?: LinkItem[];
    imagePosition?: 'left' | 'right';
    headingSize?: 'large' | 'medium' | 'extraSmall';
};

export default function PillarSection(props: Props) {
    const {
        className,
        heading,
        imageSrc,
        pillarSrc,
        imageAlt,
        quote,
        attribution,
        links,
        imagePosition,
        headingSize,
        headingDescription,
        headingClassName,
    } = props;

    return (
        <div className={_cs(className, styles.pillar)}>
            <div
                className={_cs(styles.pillarSection, imagePosition === 'left' && styles.imageLeft)}
            >
                {imagePosition === 'left' && (
                    <Image
                        className={styles.pillarImage}
                        src={imageSrc}
                        alt={imageAlt}
                    />
                )}
                <div className={styles.pillarContent}>
                    <div className={styles.pillarHeading}>
                        <Image
                            className={styles.pillarIcon}
                            src={pillarSrc}
                            alt={imageAlt}
                        />
                        <Heading
                            size={headingSize}
                            className={_cs(headingClassName, styles.pillarHeading)}
                        >
                            {heading}
                        </Heading>
                    </div>
                    <div className={styles.pillarDescription}>
                        <p>{headingDescription}</p>
                        <Image
                            className={styles.middleImage}
                            alt={imageAlt}
                            src={imageSrc}
                        />
                        {quote
                            ? (
                                <Image
                                    className={styles.quoteIcon}
                                    alt="quote icon"
                                    src={Quote}
                                />
                            )
                            : null}
                        <div className={styles.quote}>
                            {quote ? (
                                <>
                                    & quot;
                                    {quote}
                                    &quot;
                                </>
                            ) : null}
                            <div className={styles.attribution}>
                                {attribution}
                            </div>
                        </div>
                    </div>
                </div>
                {imagePosition === 'right' && (
                    <Image
                        className={styles.pillarImage}
                        src={imageSrc}
                        alt={imageAlt}
                    />
                )}
            </div>
            {isDefined(links) && (
                <>
                    <Heading size="small" className={styles.keyAreas}>
                        Key Areas of Work
                    </Heading>
                    <div
                        className={_cs(styles.card, imagePosition === 'left' && styles.cardImageLeft)}
                    >
                        {links?.map((link, index) => (
                            <div
                                className={styles.links}
                                key={link.title}
                            >
                                <div className={styles.linksContent}>
                                    <Link
                                        className={styles.title}
                                        href={link.href}
                                    >
                                        {link.title}
                                    </Link>
                                    <div className={styles.linkDescription}>
                                        {link.description}
                                    </div>
                                </div>
                                {index < links.length - 1 && (
                                    <div className={styles.separator} />
                                )}
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
