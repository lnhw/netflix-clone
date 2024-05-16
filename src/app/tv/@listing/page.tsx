import axios from "axios";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
const Listing = dynamic(() => import("@/components/listings/listing"), {
    ssr: false,
})
async function getTrending() {
    try {
        const res = await axios.get(`https://api.themoviedb.org/3/trending/tv/week`, {
            params: {
                api_key: process.env.NEXT_PUBLIC_API_KEY,
            },
        });
        if (!res) {
            throw new Error("Faild to fetching data");
        }
        const tv = res.data.results;
        return tv;
    } catch (e) {
        console.error(e);
    }
}
export default async function page() {
    const tv = await getTrending()
    return (
        <div>
            <Suspense>
                <Listing title="Trending this week" movies={tv} />
            </Suspense>
            <Suspense>
                <Listing title="Trending this week" movies={tv} />
            </Suspense>
            <Suspense>
                <Listing title="Trending this week" movies={tv} />
            </Suspense>
            <Suspense>
                <Listing title="Trending this week" movies={tv} />
            </Suspense>
        </div>
    );
}