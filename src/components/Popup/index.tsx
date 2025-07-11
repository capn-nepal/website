import {
    useCallback,
    useEffect,
    useLayoutEffect,
    useState,
} from 'react';
import { _cs } from '@togglecorp/fujs';

import Portal from '../Portal';

import styles from './styles.module.css';

const defaultPlacement = {
    top: 'unset',
    right: 'unset',
    bottom: 'unset',
    left: 'unset',
};

interface FloatingPlacementProps {
    placement: {
        top: string | undefined;
        right: string | undefined;
        bottom: string | undefined;
        left: string | undefined;
    };
    width: string | undefined;
    horizontalPosition: 'left' | 'right' | undefined;
    verticalPosition: 'top' | 'bottom' | undefined;
    maxHeight: string | undefined;
}

function getFloatPlacement(parentRef: React.RefObject<HTMLElement | null>): FloatingPlacementProps {
    const placement = {
        ...defaultPlacement,
    };

    let horizontalPosition: 'left' | 'right' | undefined;
    let verticalPosition: 'bottom' | 'top' | undefined;
    let contentWidth = 'auto';
    let maxHeight = 'auto';

    if (parentRef?.current) {
        const parentBCR = parentRef.current.getBoundingClientRect();
        const {
            x, y, width, height,
        } = parentBCR;

        const cX = window.innerWidth / 2;
        const cY = window.innerHeight / 2;

        horizontalPosition = (cX - parentBCR.x) > 0 ? 'right' : 'left';
        verticalPosition = (cY - parentBCR.y) > 0 ? 'bottom' : 'top';

        if (horizontalPosition === 'left') {
            placement.right = `${window.innerWidth - x - width}px`;
        } else if (horizontalPosition === 'right') {
            placement.left = `${x}px`;
        }

        if (verticalPosition === 'top') {
            placement.bottom = `${window.innerHeight - y + 10}px`;
        } else if (verticalPosition === 'bottom') {
            placement.top = `${y + height + 20}px`;
        }

        contentWidth = `${width}px`;
        maxHeight = `calc(50vh - ${height / 2}px)`;
    }

    return {
        placement,
        width: contentWidth,
        horizontalPosition,
        verticalPosition,
        maxHeight,
    };
}

function useAttachedFloatingPlacement(parentRef: React.RefObject<HTMLElement | null>) {
    const [placement, setPlacement] = useState<FloatingPlacementProps>({
        placement: defaultPlacement,
        width: 'auto',
        maxHeight: 'auto',
        horizontalPosition: 'left',
        verticalPosition: 'top',
    });

    useLayoutEffect(() => {
        setPlacement(getFloatPlacement(parentRef));
    }, [setPlacement, parentRef]);

    // FIXME: throttle
    const handleScroll = useCallback(() => {
        setPlacement(getFloatPlacement(parentRef));
    }, [setPlacement, parentRef]);

    // FIXME: throttle
    const handleResize = useCallback(() => {
        setPlacement(getFloatPlacement(parentRef));
    }, [setPlacement, parentRef]);

    useEffect(() => {
        document.addEventListener('scroll', handleScroll, true);
        window.addEventListener('resize', handleResize, true);

        return () => {
            document.removeEventListener('scroll', handleScroll, true);
            window.removeEventListener('resize', handleResize, true);
        };
    }, [handleScroll, handleResize]);

    return placement;
}

export interface PopupProps {
    className?: string;
    contentClassName?: string;
    parentRef: React.RefObject<HTMLElement | null>;
    elementRef?: React.RefObject<HTMLDivElement | null>;
    children: React.ReactNode;
    freeWidth?: boolean;
}

function Popup(props: PopupProps) {
    const {
        parentRef,
        children,
        className,
        contentClassName,
        freeWidth,
        elementRef,
    } = props;

    const {
        placement,
        width,
        maxHeight,
    } = useAttachedFloatingPlacement(parentRef);

    return (
        <Portal>
            <div
                style={placement}
                ref={elementRef}
                className={_cs(
                    styles.popup,
                    className,
                    // horizontalPosition === 'left' ? styles.left : styles.right,
                    // verticalPosition === 'top' ? styles.top : styles.bottom,
                )}
            >
                <div
                    className={_cs(styles.content, contentClassName)}
                    style={{
                        minWidth: !freeWidth ? width : undefined,
                        maxHeight,
                    }}
                >
                    {children}
                </div>
            </div>
        </Portal>
    );
}

export default Popup;
