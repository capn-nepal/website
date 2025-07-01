import { MdArrowOutward } from 'react-icons/md';
import Image from 'next/image';

import Button from '#components/Button';
import Heading from '#components/Heading';
import lifeAtCapn1 from '#public/lifeAtCapn1.jpeg';
import lifeAtCapn2 from '#public/lifeAtCapn2.jpeg';
import lifeAtCapn3 from '#public/lifeAtCapn3.jpeg';
import lifeAtCapn4 from '#public/lifeAtCapn4.jpeg';
import lifeAtCapn5 from '#public/lifeAtCapn5.jpeg';

import styles from './styles.module.css';

function chunkImages<T>(images: T[], size: number) {
    const result = [];
    for (let i = 0; i < images.length; i += size) {
        result.push(images.slice(i, i + size));
    }
    return result;
}

const images = [
    lifeAtCapn1,
    lifeAtCapn2,
    lifeAtCapn3,
    lifeAtCapn4,
    lifeAtCapn5,
    lifeAtCapn1,
    lifeAtCapn3,
    lifeAtCapn4,
    lifeAtCapn5,
];

export default function Cause() {
    return (
        <div className={styles.cause}>
            <div className={styles.imageGrid}>
                {chunkImages(images, 3).map((row, rowIndex) => (
                    <div
                        key={row.map((item) => item).join(', ')}
                        className={`${styles.marqueeRow} ${
                            rowIndex % 2 === 0 ? styles.leftToRight : styles.rightToLeft
                        }`}
                    >
                        <div className={styles.marqueeContent}>
                            {[...row, ...row].map((img) => (
                                <div key={String(img)} className={styles.imageWrapper}>
                                    <Image
                                        className={styles.causeImage}
                                        src={img}
                                        alt=""
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.overlay}>
                <div className={styles.supportCause}>
                    <Heading
                        size="medium"
                        className={styles.heading}
                    >
                        Support our fight for equal citizenship -
                        <br />
                        everyone deserves to belong.
                    </Heading>
                    <Button className={styles.button}>
                        SUPPORT OUR CAUSE
                        <MdArrowOutward />
                    </Button>
                </div>
            </div>
        </div>
    );
}
