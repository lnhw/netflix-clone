import axios from "axios";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";
const Billboard = dynamic(() => import("@/components/billboard"), {
    ssr: true,
})
async function tvTrending() {
    try {
        const res = await axios.get(`https://api.themoviedb.org/3/trending/tv/week`, {
            params: {
                api_key: process.env.NEXT_PUBLIC_API_KEY,
            },
        });
        const tv = res.data.results;
        return tv;
    } catch (e) {
        console.error(e);
    }
}
async function getTrailer(id: string) {
    try {
        const res = await axios.get(`https://api.themoviedb.org/3/tv/${id}/videos`, {
            params: {
                api_key: process.env.NEXT_PUBLIC_API_KEY!
            }
        });
        if (!res) {
            throw new Error("Faild to fetching data get trailer video");
        }
        const trailers = res.data.results;
        const offficialTrailer = trailers.find((trailer: any) => trailer.official === true && trailer.type === "Trailer");
        return offficialTrailer ? offficialTrailer.key : null;
    } catch (e) {
        console.error(e);
        return null;
    }
}
export default async function page() {
    const tvDay = await tvTrending();
    const tvday = tvDay[0];
    const key = await getTrailer(tvday.id);
    return (
        <>
            <div>
                <Suspense fallback={<>loading...</>}>
                    <Billboard movie={tvday} trailer={key} />
                </Suspense>
            </div>
        </>
    )
}
