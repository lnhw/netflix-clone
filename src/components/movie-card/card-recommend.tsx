import { Movie } from "@/types/movie";
import React from "react";
import Image from "next/image";
import { Play } from "lucide-react";
interface IRecommendCardProps {
    movie: Movie;
}
const RecommedCard: React.FC<IRecommendCardProps> = ({ movie }) => {
    return (
        <figure className="relative group"
            data-testId="card-recommend"
        >
            <Image className="rounded-md overflow-hidden"
                data-testId="image"
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path ?? movie.poster_path}`}
                alt={`${movie.name ?? movie.title ?? movie.original_title}`}
                width={185}
                height={255}
            />
            <figcaption>
                <p className=" absolute text-pretty bottom-0 left-0 right-0 bg-transparent px-4 mb-2 text-green-700 font-semibold text-2xl"
                    data-testid="title"
                >
                    {movie.name ?? movie.title ?? movie.original_title}
                </p>
            </figcaption>
            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
                role="button"
            >
                <Play
                    className="block border-2 border-white rounded-full p-1 cursor-pointer"
                    color="white"
                    size={30}
                />
            </button>
        </figure>
    );
}
export default RecommedCard;