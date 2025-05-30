import Image from 'next/image';

import Heading from '#components/Heading';
import AboutUsImage from '#public/aboutUsImage.jpg';

import styles from './styles.module.css';

export default function Goals() {
    return (
        <div className={styles.goals}>
            <div className={styles.goalsContent}>
                <Heading size="large">
                    Our Goals: Building Power, Reforming Laws, Transforming Lives with Dignity
                </Heading>
                <div>
                    We strive for a just society where all individuals
                    can access citizenship with dignity and equality.
                </div>
                <div className={styles.goalLists}>
                    <Image
                        // NOTE: Use image as mentioned in figma
                        className={styles.goalImage}
                        src={AboutUsImage}
                        alt="goals image"
                    />
                    <div className={styles.listCard}>
                        <div className={styles.card}>
                            <div className={styles.cardTitle}>
                                <div className={styles.number}>
                                    01
                                </div>
                                <Heading
                                    size="small"
                                    className={styles.title}
                                >
                                    Institutional Capacity Growth
                                </Heading>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.cardTitle}>
                                <div className={styles.number}>
                                    02
                                </div>
                                <Heading
                                    size="small"
                                    className={styles.title}
                                >
                                    A constitutional amendment ensuring gender-equal
                                    citizenship rights through legal advocacy
                                </Heading>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.cardTitle}>
                                <div className={styles.number}>
                                    03
                                </div>
                                <Heading
                                    size="small"
                                    className={styles.title}
                                >
                                    Grassroots awareness raising
                                    for transformative legal and societal change
                                </Heading>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.cardTitle}>
                                <div className={styles.number}>
                                    04
                                </div>
                                <Heading
                                    size="small"
                                    className={styles.title}
                                >
                                    Dignified integration of people
                                    impacted by unequal citizenship provisions
                                    in the society and organization’s self-sustainability
                                </Heading>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
