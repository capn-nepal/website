import Banner from '#components/Banner';
import Divider from '#components/Divider';
import Page from '#components/Page';
import ApproachImage from '#public/approachBanner.png';

import ChangeMaker from './ChangeMaker';
import Goals from './Goals';
import Values from './Values';
import VisionMission from './VisionMission';

import styles from './page.module.css';

export default function About() {
    return (
        <Page contentClassName={styles.about}>
            <Banner
                bannerImageSrc={ApproachImage}
                eyebrowHeading="Our Approach"
                heading={(
                    <>
                        Empowering Change Through
                        <br />
                        <span>Gender-Equal Citizenship</span>
                    </>
                )}
            />
            <VisionMission />
            <Divider />
            <Goals />
            <Values />
            <ChangeMaker />
        </Page>
    );
}
