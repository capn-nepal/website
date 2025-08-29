'use client';

import React, {
    useCallback,
    useEffect,
} from 'react';
import {
    IoIosArrowDown,
    IoIosArrowUp,
} from 'react-icons/io';
import { _cs } from '@togglecorp/fujs';

import useBlurEffect from '../../hooks/useBlurEffect';
import Button, { type Props as ButtonProps } from '../Button';
import Popup from '../Popup';

import styles from './styles.module.css';

export interface PopupButtonProps extends Omit<ButtonProps, 'label'> {
    popupClassName?: string;
    popupContentClassName?: string;
    label: React.ReactNode;
    componentRef?: React.RefObject<{
        setPopupVisibility: React.Dispatch<React.SetStateAction<boolean>>;
    } | null>;
    persistent: boolean;
    arrowHidden?: boolean;
    defaultShown?: boolean;
    elementRef?: React.RefObject<HTMLButtonElement>;
    actions?: React.ReactNode;
}

function PopupButton(props: PopupButtonProps) {
    const {
        popupClassName,
        popupContentClassName,
        children,
        label,
        name,
        actions,
        componentRef,
        arrowHidden,
        persistent,
        defaultShown,
        elementRef,
        ...otherProps
    } = props;

    const internalButtonRef = React.useRef<HTMLButtonElement>(null);
    const popupRef = React.useRef<HTMLDivElement>(null);
    const buttonRef = elementRef ?? internalButtonRef;

    const [popupShown, setPopupShown] = React.useState(defaultShown ?? false);

    useEffect(() => {
        if (componentRef) {
            componentRef.current = {
                setPopupVisibility: setPopupShown,
            };
        }
    }, [componentRef]);

    useBlurEffect(
        popupShown && !persistent,
        // () => {
        //     if (!isHovered) {
        //         setPopupShown(false);
        //     }
        // },
        setPopupShown,
        popupRef,
        buttonRef,
    );

    const closeTimeout = React.useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = () => {
        if (closeTimeout.current) {
            clearTimeout(closeTimeout.current);
        }
        setPopupShown(true);
    };

    const handleMouseLeave = () => {
        closeTimeout.current = setTimeout(() => {
            setPopupShown(false);
        }, 200); // delay so user can move into popup
    };

    const handleShowPopup = useCallback(() => {
        setPopupShown((prev) => !prev);
    }, []);

    return (
        <>
            <Button
                /* eslint-disable-next-line react/jsx-props-no-spreading */
                {...otherProps}
                name={name}
                elementRef={buttonRef}
                onClick={handleShowPopup}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                variant="transparent"
                className={_cs(popupShown && styles.active, styles.popupButton)}
            >
                {label}
                {!arrowHidden && (popupShown ? <IoIosArrowUp /> : <IoIosArrowDown />)}
                {actions}
            </Button>
            {popupShown && (
                <Popup
                    elementRef={popupRef}
                    parentRef={buttonRef}
                    className={_cs(styles.popup, popupClassName)}
                >
                    <div
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className={_cs(styles.popupContent, popupContentClassName)}
                    >
                        {children}
                    </div>
                </Popup>
            )}
        </>
    );
}

export default PopupButton;
