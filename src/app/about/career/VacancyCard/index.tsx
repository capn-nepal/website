import {
    IoCalendarOutline,
    IoPersonOutline,
} from 'react-icons/io5';
import { _cs } from '@togglecorp/fujs';

import Heading from '#components/Heading';
import Link from '#components/Link';
import data from '#data/staticData.json';
import { type AllDataQuery } from '#generated/types/graphql';

import styles from './styles.module.css';

type Positions = NonNullable<NonNullable<AllDataQuery['positions']>['results']>;
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

    const allPositionData = data.positions.results as unknown as Positions;

    const positionData = allPositionData.find(
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
