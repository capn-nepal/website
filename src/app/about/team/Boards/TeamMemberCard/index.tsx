import {
    IoLogoInstagram,
    IoLogoLinkedin,
} from 'react-icons/io5';
import { type StaticImageData } from 'next/image';

import Heading from '#components/Heading';
import ImageWrapper from '#components/ImageWrapper';
import Link from '#components/Link';

import styles from './styles.module.css';

export interface Props {
    image: StaticImageData | string;
    alt: string;
    name?: string;
    designation?: string;
    showDescription?: boolean;
    link: string;
    instagramLink?:string;
    linkedInLink?: string;
}

export default function TeamMemberCard(props: Props) {
    const {
        image,
        alt,
        name,
        designation,
        showDescription,
        link,
        instagramLink,
        linkedInLink,
    } = props;

    return (
        <Link
            href={link}
            variant="div"
            className={styles.cardWrapper}
        >
            {showDescription && (
                <div className={styles.memberDetails}>
                    <Heading
                        className={styles.memberHeading}
                        size="small"
                        font="normal"
                    >
                        {name}
                    </Heading>
                    {designation}
                </div>
            )}
            {showDescription && (
                <div className={styles.socialLink}>
                    {instagramLink && (
                        <Link
                            href={instagramLink}
                            variant="icon"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialIcon}
                            title="Instagram"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <IoLogoInstagram />
                        </Link>
                    )}
                    {linkedInLink && (
                        <Link
                            href={linkedInLink}
                            variant="icon"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialIcon}
                            title="LinkedIn"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <IoLogoLinkedin />
                        </Link>
                    )}
                </div>
            )}
            <ImageWrapper
                imageClassName={styles.cardImage}
                src={image}
                alt={alt}
            />
        </Link>
    );
}
