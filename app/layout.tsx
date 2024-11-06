import './globals.css';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <head>
                <title>Hatix Ntsoa</title>
            </head>
            <body>{children}</body>
        </html>
    );
}
