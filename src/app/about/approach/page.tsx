import Banner from '#components/Banner';
import Divider from '#components/Divider';
import Page from '#components/Page';
import AboutUsImage from '#public/aboutUsImage.jpg';

import Goals from './Goals';
import Values from './Values';
import VisionMission from './VisionMission';

import styles from './page.module.css';

export default function About() {
    return (
        <Page>
            <Banner
                // NOTE: We need to replace with the real image as mentioned in figma
                bannerImageSrc={AboutUsImage}
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
        </Page>
    );
}
