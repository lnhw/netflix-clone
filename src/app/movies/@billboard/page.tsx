
import React, { Suspense } from "react";
import axios from "axios";
import api from "@/lib/axios";
import dynamic from "next/dynamic";
const Billboard = dynamic(() => import("@/components/billboard"), {
    ssr: false,
})
async function getMovie() {
    try {
        const res = await axios.get(`https://api.themoviedb.org/3/discover/movie`, {
            params: {
                api_key: process.env.NEXT_PUBLIC_API_KEY
            }
        })
        if (!res) {
            throw new Error("Faild to fetching data");
        }
        const movies = res.data.results;
        return movies;
    } catch (error) {
        console.error(error);
    }
}
async function getTrailer(id: string) {
    try {
        const res = await api.get(`https://api.themoviedb.org/3/movie/${id}/videos`, {
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
    const movies = await getMovie();
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