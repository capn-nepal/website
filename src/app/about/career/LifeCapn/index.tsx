import Heading from '#components/Heading';
import ImageWrapper from '#components/ImageWrapper';
import AboutUsImage from '#public/aboutUsImage.jpg';

import styles from './styles.module.css';

export default function LifeCapn() {
    return (
        <div className={styles.lifeWrapper}>
            <div className={styles.lifeDescription}>
                <Heading size="extraLarge">
                    Life at CAPN
                </Heading>
                <p>
                    At CAPN, you’ll find more than a job—you’ll find a
                    community that respects your work, supports
                    your growth, and values your well-being.
                </p>
            </div>
            <div className={styles.croppedGallery}>
                <div className={styles.lifeImagesWrapper}>
                    <ImageWrapper
                        imageClassName={styles.lifeImages}
                        src={AboutUsImage}
                        alt="join images"
                    />
                    <ImageWrapper
                        imageClassName={styles.lifeImages}
                        src={AboutUsImage}
                        alt="join images"
                    />
                    <ImageWrapper
                        imageClassName={styles.lifeImages}
                        src={AboutUsImage}
                        alt="join images"
                    />
                    <ImageWrapper
                        imageClassName={styles.lifeImages}
                        src={AboutUsImage}
                        alt="join images"
                    />
                    <ImageWrapper
                        imageClassName={styles.lifeImages}
                        src={AboutUsImage}
                        alt="join images"
                    />
                </div>
            </div>
        </div>
    );
}
