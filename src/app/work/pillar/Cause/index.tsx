import { MdArrowOutward } from 'react-icons/md';

import Heading from '#components/Heading';
import Image from '#components/ImageWrapper';
import Link from '#components/Link';
import lifeAtCapn1 from '#public/lifeAtCapn1.jpeg';
import lifeAtCapn2 from '#public/lifeAtCapn2.jpeg';
import lifeAtCapn3 from '#public/lifeAtCapn3.jpeg';
import lifeAtCapn4 from '#public/lifeAtCapn4.jpeg';
import lifeAtCapn5 from '#public/lifeAtCapn5.jpeg';
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

function chunkImages<T>(arr: T[]): [T[], T[], T[]] {
    const len = arr.length;
    const size = Math.ceil(len / 3); // max size for each part
    const first = arr.slice(0, size);
    const second = arr.slice(size, 2 * size);
    const third = arr.slice(2 * size);
    return [first, second, third];
}

const images = [
    lifeAtCapn1,
    lifeAtCapn2,
    lifeAtCapn3,
    lifeAtCapn4,
    lifeAtCapn5,
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
    lifeAtCapn1,
    lifeAtCapn3,
    lifeAtCapn4,
    lifeAtCapn5,
];

export default function Cause() {
    return (
        <div className={styles.cause}>
            <div className={styles.imageGrid}>
                {chunkImages(images).map((row, rowIndex) => (
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
                    <Link
                        className={styles.button}
                        variant="button"
                        href="/support/"
                    >
                        SUPPORT OUR CAUSE
                        <MdArrowOutward />
                    </Link>
                </div>
            </div>
        </div>
    );
}
