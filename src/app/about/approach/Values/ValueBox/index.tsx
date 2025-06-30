'use client';

import {
    useEffect,
    useRef,
} from 'react';

import styles from './styles.module.css';

interface Props {
    children: React.ReactNode;
}

export default function ValueBox(props: Props) {
    const {
        children,
    } = props;
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const el = ref.current;
        console.log('el', el);
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                console.log('inn', entry);
                if (entry.isIntersecting) {
                    el.classList.add(styles.visible);
                    observer.unobserve(el);
                }
            },
            { rootMargin: '-20%' },
        );

        console.log('ob', observer, 'fdfd');

        observer.observe(el);

        observer.disconnect();
    }, []);

    return (
        <div ref={ref} className={styles.valueSection}>
            {children}
        </div>
    );
}
