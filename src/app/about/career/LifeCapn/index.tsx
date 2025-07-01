import Heading from '#components/Heading';
import ImageSlider from '#components/ImageSlider';

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
            <ImageSlider />
        </div>
    );
}
