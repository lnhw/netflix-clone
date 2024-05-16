
import React, { Suspense, lazy } from "react";
import api from "@/lib/axios"


const Billboard = lazy(() => import("@/components/billboard"));
async function trendingData() {
    try {
        const res = await api.get("/trending/all/day");
        if (!res) {
            throw new Error("Faild to fetching data");
        }
        const movies = res.data.results;
        return movies;
    } catch (e) {
        console.error(e);
        return 0
    }
}
async function getTrailer(id: string) {
    try {
        const res = await api.get(`http://api.themoviedb.org/3/movie/${id}/videos`, {
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
    const movies = await trendingData();
    const movie = movies[1];
    const key = await getTrailer(movie.id);

    return (
        <>
            <Suspense fallback={<>loading..</>}>
                <Billboard movie={movie} trailer={key} />
            </Suspense>
        </>
    );
}
