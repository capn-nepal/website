import Heading from '#components/Heading';
import Section from '#components/Section';

import styles from './styles.module.css';

export default function VisionMission() {
    return (
        <Section className={styles.visionAndMissionWrapper}>
            <div className={styles.visionAndMissionContent}>
                <div className={styles.missionVision}>
                    <Heading size="extraLarge">
                        Our Mission
                    </Heading>
                    <div className={styles.description}>
                        <p>
                            CAPN is committed to enhancing its capacity and advocating for legal
                            reform and transformative social change, establishing gender-equal
                            citizenship as a human rights issue nationally and mainstreaming
                            it internationally. Through the collective action of initiatives
                            led by individuals impacted by citizenship and supported by allies,
                            we strive for legal, policy, and administrative reforms.
                        </p>
                        <p>
                            Our goal is to
                            {' '}
                            <span className={styles.textAccent}>raise social awareness </span>
                            about gender-equal citizenship laws, highlight its impact and foster
                            a supportive community that promotes solidarity, dignity, and
                            support for individuals impacted by citizenship.
                        </p>
                    </div>
                </div>
                <div className={styles.missionVision}>
                    <Heading size="extraLarge">
                        Our Vision
                    </Heading>
                    <div className={styles.description}>
                        <p>
                            Transform and advocate for gender equal citizenship laws,
                            practices and narratives in Nepal
                            by ensuring it as a
                            {' '}
                            <span className={styles.textAccent}>
                                fundamental human rights issue.
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
}
