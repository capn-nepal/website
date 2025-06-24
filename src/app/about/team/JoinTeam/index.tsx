import Heading from '#components/Heading';
import ImageWrapper from '#components/ImageWrapper';
import Link from '#components/Link';
import AboutUsImage from '#public/aboutUsImage.jpg';

import styles from './styles.module.css';

export default function JoinTeam() {
    return (
        <div className={styles.joinWrapper}>
            <div className={styles.joinDescription}>
                <Heading size="extraLarge">
                    Join Our Team
                </Heading>
                <p>
                    At CAPN, you’ll find more than a job—you’ll
                    find a community that respects your work,
                    supports your growth, and values your well-being.
                </p>
                <Link
                    href="/about/team/"
                    showIcon
                >
                    View Open Roles
                </Link>
            </div>
            <div className={styles.croppedGallery}>
                <div className={styles.joinImagesWrapper}>
                    <ImageWrapper
                        imageClassName={styles.joinImages}
                        src={AboutUsImage}
                        alt="join images"
                    />
                    <ImageWrapper
                        imageClassName={styles.joinImages}
                        src={AboutUsImage}
                        alt="join images"
                    />
                    <ImageWrapper
                        imageClassName={styles.joinImages}
                        src={AboutUsImage}
                        alt="join images"
                    />
                    <ImageWrapper
                        imageClassName={styles.joinImages}
                        src={AboutUsImage}
                        alt="join images"
                    />
                    <ImageWrapper
                        imageClassName={styles.joinImages}
                        src={AboutUsImage}
                        alt="join images"
                    />
                </div>
            </div>
        </div>
    );
}
