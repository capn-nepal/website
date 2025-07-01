import Banner from '#components/Banner';
import Page from '#components/Page';
import TeamImage from '#public/team.png';

import Boards from './Boards';
import JoinTeam from './JoinTeam';

import styles from './page.module.css';

export default function Team() {
    return (
        <Page className={styles.teamPage}>
            <Banner
                // NOTE: We need to replace with the real image as mentioned in figma
                bannerImageSrc={TeamImage}
                eyebrowHeading="Our Team"
                withoutBackground
                heading={(
                    <>
                        Meet the Voices Behind the
                        <br />
                        Movement
                    </>
                )}
            />
            <Boards />
            <JoinTeam />
        </Page>
    );
}
