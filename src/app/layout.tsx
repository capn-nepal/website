import './globals.css';

import type { Metadata } from 'next';
import {
    Be_Vietnam_Pro,
    Public_Sans,
} from 'next/font/google';

const beVietnamPro = Be_Vietnam_Pro({
    variable: '--font-heading',
    weight: ['200', '400', '500', '600', '700', '800'],
    subsets: ['latin'],
});

const publicSans = Public_Sans({
    variable: '--font-text',
    subsets: ['latin'],
});

/* eslint-disable react-refresh/only-export-components */
export const metadata: Metadata = {
    title: 'CAPN',
    description: 'CAPN',
};

export default function RootLayout({
    children,
}: Readonly<{
        children: React.ReactNode;
    }>) {
    return (
        <html lang="en">
            <body className={`${beVietnamPro.variable} ${publicSans.variable}`}>
                {children}
            </body>
        </html>
    );
}
