import ImageWrapper from '#components/ImageWrapper';
import lifeAtCapn1 from '#public/lifeAtCapn1.jpeg';
import lifeAtCapn2 from '#public/lifeAtCapn2.jpeg';
import lifeAtCapn3 from '#public/lifeAtCapn3.jpeg';
import lifeAtCapn4 from '#public/lifeAtCapn4.jpeg';
import lifeAtCapn5 from '#public/lifeAtCapn5.jpeg';
import lifeAtCapn6 from '#public/lifeAtCapn6.jpeg';
import lifeAtCapn7 from '#public/lifeAtCapn7.jpg';

import styles from './styles.module.css';

const images = [
    lifeAtCapn1,
    lifeAtCapn2,
    lifeAtCapn3,
    lifeAtCapn4,
    lifeAtCapn5,
    lifeAtCapn6,
    lifeAtCapn7,
];

export default function ImageSlider() {
    return (
        <div className={styles.croppedGallery}>
            <div className={styles.joinImagesWrapper}>
                {[...images, ...images].map((image, index) => (
                    <ImageWrapper
                        // eslint-disable-next-line react/no-array-index-key
                        key={index}
                        imageClassName={styles.joinImages}
                        src={image}
                        alt={`images-${index}`}
                    />
                ))}
            </div>
        </div>
    );
}
