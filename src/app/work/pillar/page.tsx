import Banner from '#components/Banner';
import Divider from '#components/Divider';
import Page from '#components/Page';
import PillarImage from '#public/pillar.jpg';

import Cause from './Cause';
import LegalAdvocacy from './LegalAdvocacy';
import SafeHaven from './SafeHaven';
import SocialAwareness from './SocialAwareness';

import styles from './page.module.css';

export default function Work() {
    return (
        <Page
            contentClassName={styles.work}
        >
            <Banner
                bannerImageSrc={PillarImage}
                eyebrowHeading="Our Approach"
                heading={(
                    <>
                        Foundations of Our Advocacy:
                        <br />
                        <span>Pillars of CAPN</span>
                    </>
                )}
            />
            <LegalAdvocacy />
            <Divider />
            <SafeHaven />
            <Divider />
            <SocialAwareness />
            <Cause />
        </Page>
    );
}
