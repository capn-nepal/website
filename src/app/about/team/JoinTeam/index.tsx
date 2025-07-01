import Heading from '#components/Heading';
import ImageSlider from '#components/ImageSlider';
import Link from '#components/Link';
import Section from '#components/Section';

import styles from './styles.module.css';

export default function JoinTeam() {
    return (
        <div className={styles.joinWrapper}>
            <Section contentClassName={styles.joinDescription}>
                <Heading size="extraLarge">
                    Join Our Team
                </Heading>
                <p>
                    At CAPN, you’ll find more than a job—you’ll
                    find a community that respects your work,
                    supports your growth, and values your well-being.
                </p>
                <Link
                    href="/about/team/"
                    showIcon
                >
                    View Open Roles
                </Link>
            </Section>
            <ImageSlider />
        </div>
    );
}
