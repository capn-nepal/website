import Heading from '#components/Heading';
import ImageWrapper from '#components/ImageWrapper';
import Link from '#components/Link';
import Section from '#components/Section';
import lifeAtCapn1 from '#public/lifeAtCapn1.jpeg';
import lifeAtCapn2 from '#public/lifeAtCapn2.jpeg';
import lifeAtCapn3 from '#public/lifeAtCapn3.jpeg';
import lifeAtCapn4 from '#public/lifeAtCapn4.jpeg';
import lifeAtCapn5 from '#public/lifeAtCapn5.jpeg';

import styles from './styles.module.css';

export default function JoinTeam() {
    return (
        <div className={styles.joinWrapper}>
            <Section contentClassName={styles.joinDescription}>
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
            </Section>
            <div className={styles.croppedGallery}>
                <div className={styles.joinImagesWrapper}>
                    <ImageWrapper
                        imageClassName={styles.joinImages}
                        src={lifeAtCapn2}
                        alt="join images"
                    />
                    <ImageWrapper
                        imageClassName={styles.joinImages}
                        src={lifeAtCapn4}
                        alt="join images"
                    />
                    <ImageWrapper
                        imageClassName={styles.joinImages}
                        src={lifeAtCapn5}
                        alt="join images"
                    />
                    <ImageWrapper
                        imageClassName={styles.joinImages}
                        src={lifeAtCapn1}
                        alt="join images"
                    />
                    <ImageWrapper
                        imageClassName={styles.joinImages}
                        src={lifeAtCapn3}
                        alt="join images"
                    />
                </div>
            </div>
        </div>
    );
}
