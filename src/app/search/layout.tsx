import Footer from '@/components/footer';
import Header from '@/components/header';

import React from 'react';
export default function SearchLayout({
    children,
    listing,
}: {
    children: React.ReactNode;
    listing: React.ReactNode;
}) {
    return (
        <>
            <Header />
            <>{children}</>
            <>{listing}</>
            <Footer />
        </>
    )
}