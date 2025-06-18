import {
    _cs,
    isDefined,
} from '@togglecorp/fujs';
import { type StaticImageData } from 'next/image';

import ImageWrapper from '#components/ImageWrapper';

import Heading from '../Heading';

import styles from './styles.module.css';

interface Props {
    eyebrowHeading?: string;
    heading?: React.ReactNode;
    withoutBackground?: boolean;
    bannerImageSrc?: StaticImageData | string;
}

export default function Banner(props: Props) {
    const {
        eyebrowHeading,
        heading,
        bannerImageSrc,
        withoutBackground,
    } = props;

    return (
        <div className={_cs(
            styles.banner,
            bannerImageSrc && styles.imageBanner,
            withoutBackground && styles.withoutBackground,
        )}
        >
            <div className={styles.contentSection}>
                <div className={styles.content}>
                    {isDefined(eyebrowHeading) && (
                        <Heading className={styles.eyebrowHeading} size="extraSmall">
                            {eyebrowHeading}
                        </Heading>
                    )}
                    <Heading
                        className={styles.heading}
                        size="superLarge"
                    >
                        {heading}
                    </Heading>
                </div>
            </div>
            {isDefined(bannerImageSrc) && (
                <div className={styles.bannerImage}>
                    <ImageWrapper
                        className={styles.imageWrapper}
                        imageClassName={styles.image}
                        src={bannerImageSrc}
                        alt="Banner Image"
                    />
                </div>
            )}
        </div>
    );
}
