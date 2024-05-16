
import React, { lazy, Suspense } from "react";
import { Heading } from "@radix-ui/themes";
import { Carousel } from "@/components/carousel";
import { Movie } from "@/types/movie";
import { SkeletonCard } from "../skeleton";
interface IListingProps {
    title?: string;
    movies: Movie[];
}
const Card = lazy(() => import("../movie-card/card"));
const Listing: React.FC<IListingProps> = ({ movies, title }) => {
    return (
        <>
            <div className="-mt-[6rem] h-[325px] w-full flex flex-col overflow-x-auto space-x-3">
                <Heading as="h2" className="css text-white font-[1.6rem] sm:px-[30px] md:px-[40px] lg:px-[60px] py-2 z-10">
                    {title}
                </Heading>
                <>
                    <Carousel className="mySwiper w-full cursor-pointer" sm={2.5} md={4} lg={6.5} >
                        {movies.map((movie: Movie) => {
                            return (
                                <Suspense key={movie.id} fallback={<SkeletonCard />}>
                                    <Card movie={movie} />
                                </Suspense>
                            );
                        })}
                    </Carousel>
                </>
            </div >
        </>
    );
}
export default Listing;