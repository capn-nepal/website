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
}

export default function TeamMemberCard(props: Props) {
    const {
        image,
        alt,
        name,
        designation,
        showDescription,
        link,
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
            <ImageWrapper
                imageClassName={styles.cardImage}
                src={image}
                alt={alt}
            />
        </Link>
    );
}
