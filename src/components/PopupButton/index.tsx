'use client';

import React, {
    useCallback,
    useEffect,
    useRef,
    useState,
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

    const internalButtonRef = useRef<HTMLButtonElement>(null);
    const popupRef = useRef<HTMLDivElement>(null);
    const buttonRef = elementRef ?? internalButtonRef;

    const [popupShown, setPopupShown] = useState(defaultShown ?? false);
    const [isHovered, setIsHovered] = useState(false);

    const showPopup = popupShown || isHovered;

    useEffect(() => {
        if (componentRef) {
            componentRef.current = {
                setPopupVisibility: setPopupShown,
            };
        }
    }, [componentRef]);

    useBlurEffect(
        showPopup && !persistent,
        () => {
            if (!isHovered) {
                setPopupShown(false);
            }
        },
        popupRef,
        buttonRef,
    );

    const handleShowPopup = useCallback(() => {
        setPopupShown((prev) => !prev);
    }, []);

    return (
        <div
            className={styles.popupButton}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Button
                /* eslint-disable-next-line react/jsx-props-no-spreading */
                {...otherProps}
                name={name}
                elementRef={buttonRef}
                onClick={handleShowPopup}
                variant="transparent"
                className={_cs(showPopup && styles.active, styles.popupButton)}
            >
                {label}
                {!arrowHidden && (showPopup ? <IoIosArrowUp /> : <IoIosArrowDown />)}
                {actions}
            </Button>
            {showPopup && (
                <Popup
                    elementRef={popupRef}
                    parentRef={buttonRef}
                    className={_cs(styles.popup, popupClassName)}
                    contentClassName={_cs(styles.popupContent, popupContentClassName)}
                >
                    {children}
                </Popup>
            )}
        </div>
    );
}

export default PopupButton;
