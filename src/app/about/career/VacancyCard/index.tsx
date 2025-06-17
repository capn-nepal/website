import {
    IoCalendarOutline,
    IoPersonOutline,
} from 'react-icons/io5';
import { _cs } from '@togglecorp/fujs';

import Heading from '#components/Heading';
import Link from '#components/Link';
import { positions } from '#data/staticData.json';

import styles from './styles.module.css';

interface Props {
    className?: string;
    deadline: string;
    applicantsCount?: number;
    link: string;
    position: string;
}
export default function VacancyCard(props: Props) {
    const {
        className,
        deadline,
        applicantsCount,
        link,
        position,
    } = props;

    const positionData = positions.results.find(
        (item) => item.id === position,
    );

    return (
        <Link
            className={_cs(className, styles.card)}
            href={link}
            variant="div"
        >
            <Heading
                size="medium"
            >
                {positionData?.name}
            </Heading>
            {positionData?.summary && (
                <p>
                    {positionData?.summary}
                </p>
            )}
            <div className={styles.actions}>
                <div className={styles.actionsContent}>
                    <IoCalendarOutline />
                    {deadline}
                </div>
                <div className={styles.actionsContent}>
                    <IoPersonOutline />
                    {applicantsCount}
                </div>
            </div>
        </Link>
    );
}
