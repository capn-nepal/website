import ImageWrapper from '#components/ImageWrapper';
import lifeAtCapn1 from '#public/lifeAtCapn1.jpeg';
import lifeAtCapn2 from '#public/lifeAtCapn2.jpeg';
import lifeAtCapn3 from '#public/lifeAtCapn3.jpeg';
import lifeAtCapn4 from '#public/lifeAtCapn4.jpeg';
import lifeAtCapn5 from '#public/lifeAtCapn5.jpeg';

import styles from './styles.module.css';

const images = [
    lifeAtCapn1,
    lifeAtCapn2,
    lifeAtCapn3,
    lifeAtCapn4,
    lifeAtCapn5,
];

export default function ImageSlider() {
    return (
        <div className={styles.croppedGallery}>
            <div className={styles.joinImagesWrapper}>
                {[...images, ...images].map((image, index) => (
                    <ImageWrapper
                        key={String(image)}
                        imageClassName={styles.joinImages}
                        src={image}
                        alt={`images-${index}`}
                    />
                ))}
            </div>
        </div>
    );
}
