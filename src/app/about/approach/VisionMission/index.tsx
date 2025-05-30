import Heading from '#components/Heading';

import styles from './styles.module.css';

export default function VisionMission() {
    return (
        <div className={styles.visionAndMission}>
            <div className={styles.visionAndMissionContent}>
                <div className={styles.mission}>
                    <Heading size="large">
                        Our Mission
                    </Heading>
                    <div className={styles.missionDescription}>
                        <div>
                            CAPN is committed to enhancing its capacity and advocating for legal
                            reform and transformative social change, establishing gender-equal
                            citizenship as a human rights issue nationally and mainstreaming
                            it internationally. Through the collective action of initiatives
                            led by individuals impacted by citizenship and supported by allies,
                            we strive for legal, policy, and administrative reforms.
                        </div>
                        <div>
                            Our goal is t
                            {' '}
                            <span className={styles.textAccent}>raise social awareness </span>
                            about gender-equal citizenship laws, highlight its impact and foster
                            a supportive community that promotes solidarity, dignity, and
                            support for individuals impacted by citizenship.
                        </div>
                    </div>
                </div>
                <div className={styles.vision}>
                    <Heading size="large">
                        Our Vision
                    </Heading>
                    <div className={styles.visionDescription}>
                        Transform and advocate for gender equal citizenship laws,
                        practices and narratives in Nepal
                        by ensuring it as a
                        {' '}
                        <span className={styles.textAccent}>
                            fundamental human rights issue.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
