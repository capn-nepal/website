import React from 'react';
import { _cs } from '@togglecorp/fujs';

import Heading from '#components/Heading';
import ImageScrollCard from '#components/ImageScrollCard';
import annualReport from '#public/annualReport.png';
import boyImage from '#public/boy.png';
import girlImage from '#public/girl.jpg';

import styles from './styles.module.css';

const description = 'Explore our in-depth reports and publications, highlighting key initiatives, research, and stories that shape the fight for equal citizenship rights.';

interface Props {
    className?: string;
}

export default function Reports(props: Props) {
    const { className } = props;

    return (
        <div className={_cs(className, styles.reports)}>
            <div className={styles.content}>
                <div className={styles.wrapper}>
                    <div className={styles.leftContainer}>
                        <div className={styles.img1}>
                            <ImageScrollCard
                                className={styles.image}
                                title="Girl who lost her country"
                                images={[girlImage]}
                                link="/"
                                variant="small"
                            />
                        </div>
                        <div className={styles.img3}>
                            <ImageScrollCard
                                className={styles.image}
                                title="Annual Report Fiscal Year 2021 to 2023"
                                images={[annualReport]}
                                link="/"
                                variant="small"
                            />
                        </div>
                        <div className={styles.img2}>
                            <ImageScrollCard
                                className={styles.image}
                                title="School Outreach Program comprehensive Report"
                                images={[boyImage]}
                                link="/"
                                variant="small"
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.rightContainer}>
                    <Heading
                        className={styles.heading}
                        size="large"
                    >
                        {description}
                    </Heading>
                </div>
            </div>
        </div>
    );
}
