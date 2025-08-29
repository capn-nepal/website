import ImageWrapper from '#components/ImageWrapper';
import lifeAtCapn1 from '#public/lifeAtCapn1.jpeg';
import lifeAtCapn2 from '#public/lifeAtCapn2.jpeg';
import lifeAtCapn3 from '#public/lifeAtCapn3.jpeg';
import lifeAtCapn4 from '#public/lifeAtCapn4.jpeg';
import lifeAtCapn5 from '#public/lifeAtCapn5.jpeg';
import lifeAtCapn6 from '#public/lifeAtCapn6.jpeg';
import lifeAtCapn7 from '#public/lifeAtCapn7.jpg';
import lifeAtCapn10 from '#public/lifeatcapn10.jpg';
import lifeAtCapn11 from '#public/lifeatcapn11.jpg';
import lifeAtCapn12 from '#public/lifeatcapn12.jpg';
import lifeAtCapn13 from '#public/lifeatcapn13.jpg';
import lifeAtCapn14 from '#public/lifeatcapn14.jpg';
import lifeAtCapn15 from '#public/lifeatcapn15.jpg';
import lifeAtCapn16 from '#public/lifeatcapn16.jpg';
import lifeAtCapn17 from '#public/lifeatcapn17.jpg';
import lifeAtCapn18 from '#public/lifeatcapn18.jpg';
import lifeAtCapn19 from '#public/lifeatcapn19.jpg';

import styles from './styles.module.css';

const images = [
    lifeAtCapn1,
    lifeAtCapn2,
    lifeAtCapn3,
    lifeAtCapn4,
    lifeAtCapn5,
    lifeAtCapn6,
    lifeAtCapn7,
    lifeAtCapn10,
    lifeAtCapn11,
    lifeAtCapn12,
    lifeAtCapn13,
    lifeAtCapn14,
    lifeAtCapn15,
    lifeAtCapn16,
    lifeAtCapn17,
    lifeAtCapn18,
    lifeAtCapn19,
];

function shuffle<T>(array: T[]) {
    const newArr = [...array];
    newArr.sort(() => Math.random() - 0.5);
    return array;
}

export default function ImageSlider() {
    return (
        <div className={styles.croppedGallery}>
            <div className={styles.joinImagesWrapper}>
                {[...shuffle(images), ...shuffle(images)].map((image, index) => (
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
