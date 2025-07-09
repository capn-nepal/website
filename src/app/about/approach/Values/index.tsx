import Heading from '#components/Heading';
import ImageWrapper from '#components/ImageWrapper';
import Section from '#components/Section';
import Accountability from '#public/valueIcons/Accountability.svg';
import Dignified from '#public/valueIcons/Dignified Citizenship.svg';
import Empathy from '#public/valueIcons/Empathy.svg';
import Gender from '#public/valueIcons/Gender Equality.svg';
import Justice from '#public/valueIcons/Justice.svg';

import ValueBox from './ValueBox';

import styles from './styles.module.css';

export default function Values() {
    return (
        <Section className={styles.values}>
            <div className={styles.valuesContent}>
                <div className={styles.valueHeadingSection}>
                    <Heading className={styles.valueHeading} size="extraLarge">
                        Our Values
                    </Heading>
                    <p className={styles.description}>
                        At CAPN, our values are more than ideals—they
                        are actionable commitments that shape our pursuit
                        of gender-equal citizenship and inclusive justice.
                    </p>
                </div>
                <div className={styles.valuesList}>
                    <ValueBox>
                        <div className={styles.heading}>
                            Gender Equality
                        </div>
                        <ImageWrapper
                            className={styles.valueIcon}
                            src={Gender}
                            alt="gender"
                        />
                        <div className={styles.separator}>
                            <div className={styles.outerCircle}>
                                <div className={styles.innerCircle} />
                            </div>
                            <div className={styles.line} />
                        </div>
                        <p>
                            We advocate for gender-equal citizenship laws to
                            dismantle inequality and ensure everyone can thrive
                            without discrimination.
                        </p>
                    </ValueBox>
                    <ValueBox>
                        <div className={styles.heading}>
                            Dignified citizenship
                            & Livelihood
                        </div>
                        <ImageWrapper
                            className={styles.valueIcon}
                            src={Dignified}
                            alt="dignified"
                        />
                        <div className={styles.separator}>
                            <div className={styles.outerCircle}>
                                <div className={styles.innerCircle} />
                            </div>
                            <div className={styles.line} />
                        </div>
                        <p>
                            We support dignified livelihoods to empower
                            impacted individuals with self-sufficiency and
                            strengthen their citizenship rights.
                        </p>
                    </ValueBox>
                    <ValueBox>
                        <div className={styles.heading}>
                            Intersectional Justice
                        </div>
                        <ImageWrapper
                            className={styles.valueIcon}
                            src={Justice}
                            alt="justice"
                        />
                        <div className={styles.separator}>
                            <div className={styles.outerCircle}>
                                <div className={styles.innerCircle} />
                            </div>
                            <div className={styles.line} />
                        </div>
                        <p>
                            CAPN addresses intersecting forms of
                            discrimination and centers impacted voices
                            with dignity, rejecting tokenism for real empowerment.
                        </p>
                    </ValueBox>
                    <ValueBox>
                        <div className={styles.heading}>
                            Accountability & Sensitivity
                        </div>
                        <ImageWrapper
                            className={styles.valueIcon}
                            src={Accountability}
                            alt="accountability"
                        />
                        <div className={styles.separator}>
                            <div className={styles.outerCircle}>
                                <div className={styles.innerCircle} />
                            </div>
                            <div className={styles.line} />
                        </div>
                        <p>
                            We uphold accountability and sensitivity,
                            ensuring transparent, respectful work
                            grounded in integrity and empathy toward
                            the communities we serve.
                        </p>
                    </ValueBox>
                    <ValueBox>
                        <div className={styles.heading}>
                            Empathy & Efficiency
                        </div>
                        <ImageWrapper
                            className={styles.valueIcon}
                            src={Empathy}
                            alt="empathy"
                        />
                        <div className={styles.separator}>
                            <div className={styles.outerCircle}>
                                <div className={styles.innerCircle} />
                            </div>
                            <div className={styles.line} />
                        </div>
                        <p>
                            We prioritize sustainability and empathy,
                            managing resources responsibly while
                            building trust through compassionate engagement.
                        </p>
                    </ValueBox>
                </div>
            </div>
        </Section>
    );
}
