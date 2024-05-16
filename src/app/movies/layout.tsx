import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";
export default function MoviesLayout({
    children,
    billboard,
    listing,
}: {
    children: React.ReactNode;
    billboard: React.ReactNode;
    listing: React.ReactNode;
}) {
    return (
        <>
            <Header />
            <>
                {children}
                {billboard}
                {listing}
            </>
            <Footer />
        </>
    )
}