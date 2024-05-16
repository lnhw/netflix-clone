
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "",
    description: ""
}
export default function BrowseLayout({
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
            <div className="bg-black">
                <>{children}</>
                <>{billboard}</>
                <>{listing}</>
            </div>
            <Footer />
        </>
    );
}