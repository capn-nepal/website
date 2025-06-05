import Image, { StaticImageData } from 'next/image';

import Heading from '#components/Heading';
import Link from '#components/Link';

import styles from './styles.module.css';

type LinkItem = {
    title: string;
    href: string;
    description: string;
};

type Props = {
    heading: string;
    imageSrc: string | StaticImageData;
    headingDescription: string;
    imageAlt: string;
    quote: string;
    attribution: string;
    links: LinkItem[];
    imagePosition?: 'left' | 'right';
    headingSize?: 'large' | 'medium' | 'extraSmall';
};

export default function PillarSection(props: Props) {
    const {
        heading,
        imageSrc,
        imageAlt,
        quote,
        attribution,
        links,
        imagePosition,
        headingSize,
        headingDescription,
    } = props;

    return (
        <div className={styles.pillar}>
            <div className={`${styles.pillarSection}
                ${imagePosition === 'left' ? styles.imageLeft : ''
        }`}
            >
                {imagePosition === 'left' && (
                    <Image
                        className={styles.pillarImage}
                        src={imageSrc}
                        alt={imageAlt}
                    />
                )}
                <div className={styles.pillarContent}>
                    <Heading size={headingSize}>
                        {heading}
                    </Heading>
                    <div className={styles.pillarDescription}>
                        {headingDescription}
                        <div className={styles.quote}>
                            &quot;
                            {quote}
                            &quot;
                            <Heading size="extraSmall">
                                {attribution}
                            </Heading>
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
            <div className={styles.keyAreas}>
                Key Areas of Work
            </div>
            <div
                className={`${styles.card}
                    ${imagePosition === 'left' ? styles.cardImageLeft : ''
        }`}
            >
                {links?.map((link, index) => (
                    <div
                        className={styles.links}
                        key={link.title}
                    >
                        <div>
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
        </div>
    );
}
