import { MdArrowOutward } from 'react-icons/md';
import Image from 'next/image';

import Button from '#components/Button';
import Heading from '#components/Heading';
import Advocacy from '#public/advocacy.jpg';

import styles from './styles.module.css';

// TODO: Upload the real images from Figma
const images = [
    { src: Advocacy, alt: 'Legal Advocacy' },
    { src: Advocacy, alt: 'Justice Support' },
    { src: Advocacy, alt: 'Human Rights' },
    { src: Advocacy, alt: 'Equality for All' },
    { src: Advocacy, alt: 'Freedom and Rights' },
    { src: Advocacy, alt: 'Social Inclusion' },
    { src: Advocacy, alt: 'Community Support' },
    { src: Advocacy, alt: 'Awareness Campaign' },
    { src: Advocacy, alt: 'Child Protection' },
];

export default function Cause() {
    return (
        <div className={styles.cause}>
            <div className={styles.imageGrid}>
                {images?.map((img) => (
                    <div
                        key={img.alt}
                        className={styles.imageWrapper}
                    >
                        <Image
                            className={styles.causeImage}
                            src={img.src}
                            alt={img.alt}
                        />
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
