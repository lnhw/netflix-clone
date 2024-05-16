import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";
export default function TVLayout({
    children,
    billboardtv,
    listing
}: {
    children: React.ReactNode;
    billboardtv: React.ReactNode;
    listing: React.ReactNode;
}) {
    return (
        <>
            <Header />
            <div>
                {children}
                {billboardtv}
                {listing}
            </div>
            <Footer />
        </>
    )
}