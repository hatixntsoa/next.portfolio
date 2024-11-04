import './globals.css';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <head>
                {/* Reference the favicon from the public directory */}
                <link rel="icon" href="/images/logo.png" />
                <link rel="apple-touch-icon" href="/images/logo.png" /> {/* Optional: for iOS devices */}
                <title>Hatix Ntsoa</title>
            </head>
            <body>{children}</body>
        </html>
    );
}
