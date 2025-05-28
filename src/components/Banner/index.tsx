import { isDefined } from '@togglecorp/fujs';
import Image, { type StaticImageData } from 'next/image';

import Heading from '../Heading';

import styles from './styles.module.css';

interface Props {
    eyebrowHeading?: string;
    heading?: React.ReactNode;
    bannerImageSrc?: StaticImageData;
}

export default function Banner(props: Props) {
    const {
        eyebrowHeading,
        heading,
        bannerImageSrc,
    } = props;
    return (
        <div className={styles.banner}>
            <div className={styles.contentSection}>
                <div className={styles.content}>
                    {isDefined(eyebrowHeading) && (
                        <Heading className={styles.eyebrowHeading} size="small">
                            {eyebrowHeading}
                        </Heading>
                    )}
                    <Heading className={styles.heading} size="superLarge">
                        {heading}
                    </Heading>
                </div>
            </div>
            {isDefined(bannerImageSrc) && (
                <div className={styles.bannerImage}>
                    <Image
                        className={styles.aboutUsImage}
                        src={bannerImageSrc}
                        alt="Banner Image"
                    />
                </div>
            )}
        </div>
    );
}
