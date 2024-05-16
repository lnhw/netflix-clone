import Listing from '@/components/listings/listing';
import api from '@/lib/axios';
import React, { Suspense } from 'react';

async function getTrending() {
    try {
        const res = await api.get("/trending/all/day");
        if (!res) {
            throw new Error("Faild to fetching data");
        }
        const movies = res.data.results;
        return movies;
    } catch (e) {
        console.error(e);
    }
}
export default async function Page() {
    const movies = await getTrending();
    return (
        <>
            <div>
                <Suspense fallback={<>loading...</>}>
                    <Listing title="Trending this week" movies={movies} />
                </Suspense>
            </div>
           <div>
                <Suspense fallback={<>loading...</>}>
                    <Listing title="Trending this week" movies={movies} />
                </Suspense>
           </div>
            <div>
                <Suspense fallback={<>loading...</>}>
                    <Listing title="Trending this week" movies={movies} />
                </Suspense>
            </div>
            <div>
                <Suspense fallback={<>loading...</>}>
                    <Listing title="Trending this week" movies={movies} />
                </Suspense>
            </div>
        </>
    );
}   