import {
    IoCalendarOutline,
    IoPersonOutline,
} from 'react-icons/io5';
import { _cs } from '@togglecorp/fujs';

import Heading from '#components/Heading';
import Link from '#components/Link';

import styles from './styles.module.css';

interface Props {
    className?: string;
    deadline: string;
    summary?: string;
    applicantsCount?: number;
    link: string;
    title: string;
}
export default function VacancyCard(props: Props) {
    const {
        className,
        deadline,
        applicantsCount,
        summary,
        link,
        title,
    } = props;

    return (
        <Link
            className={_cs(className, styles.card)}
            href={link}
            variant="div"
        >
            <Heading
                size="medium"
            >
                {title}
            </Heading>
            {summary && (
                <p>
                    {summary}
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
