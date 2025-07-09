import Heading from '#components/Heading';
import ImageWrapper from '#components/ImageWrapper';
import Section from '#components/Section';
import GoalsImage from '#public/goals.png';

import styles from './styles.module.css';

export default function Goals() {
    return (
        <Section className={styles.goals}>
            <div className={styles.goalsContent}>
                <Heading className={styles.goalsHeading} size="extraLarge">
                    Our Goals: Building Power, Reforming Laws, Transforming Lives with Dignity
                </Heading>
                <p className={styles.goalDescription}>
                    We strive for a just society where all individuals
                    can access citizenship with dignity and equality.
                </p>
                <div className={styles.goalLists}>
                    <ImageWrapper
                        className={styles.goalImageWrapper}
                        imageClassName={styles.goalImage}
                        src={GoalsImage}
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
        </Section>
    );
}
