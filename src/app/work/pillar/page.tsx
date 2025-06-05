import Banner from '#components/Banner';
import Divider from '#components/Divider';
import Page from '#components/Page';
import PillarImage from '#public/pillar.jpg';

import Cause from './Cause';
import LegalAdvocacy from './LegalAdvocacy';
import SafeHaven from './SafeHaven';
import SocialAwareness from './SocialAwareness';

export default function Work() {
    return (
        <Page>
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
            <Divider />
            <Cause />
        </Page>
    );
}
