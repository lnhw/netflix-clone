"use client";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Movie } from "@/types/movie";
import Image from "next/image";
import { Heading, Box, Button, Card, Flex, IconButton, Text } from "@radix-ui/themes";
import { CircleX, Play, Plus, ThumbsUp, Volume2, VolumeX } from "lucide-react";
import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "@/hooks/storeHooks";
import { getGenres, selectAllGenres } from "@/store/features/genres/genresSlice";
import { getGenreNames } from "@/utlis";
import styled from 'styled-components';
import RecommedCard from "./card-recommend";
import { css } from '@emotion/css'
import { fetchRecommendedMovies } from "@/store/features/recommened/recommenedSlice";
import { TooTtip } from "../tooltip";

interface ICardDetailProps {
    movie: Movie;
    onClose: () => void;
}
const CardDetail: React.FC<ICardDetailProps> = ({ movie, onClose }) => {
    const [muted, setMuted] = useState(false);
    const dispatch = useAppDispatch();
    const toggle = () => {
        setMuted(!muted);
    }

    const genres = useSelector(selectAllGenres);
    const recommendedMovies = useAppSelector((state) => state.recommendedMovies.movies);

    useEffect(() => {
        dispatch(getGenres());
        dispatch(fetchRecommendedMovies(movie.id));
    }, [dispatch, movie.id]);
    useEffect(() => {
        const detail = document.getElementsByClassName("card-detail");

    }, []);
    return ReactDOM.createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 "
            data-testId="card-detail"
        >
            <div className="sm:w-3/4 sm:h-2/3 md:w-2/3 lg:w-[86%]  lg:h-4/5 overflow-y-auto rounded-lg shadow-lg"
                onClick={(e) => e.stopPropagation()}
            >
                {/* content */}
                <div>
                    <div className="relative overflow-hidden w-full h-[50vh] min-h-[486px]">
                        <Image
                            className="object-cover"
                            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                            alt={`${movie.name ?? movie.title}`}
                            fill
                            quality={100}
                        />
                        <div className="bg-white absolute top-1 right-1 hover:cursor-pointer rounded-full">
                            <IconButton aria-label="close" onClick={onClose}>
                                <CircleX size={30} color="gray" className=" hover:text-white border-none" />
                            </IconButton>
                        </div>
                        <div className="absolute w-full bottom-1 px-6">
                            <div>
                                <div>
                                    <Heading size="2" as="h2" className="pb-4 text-white mb-2 text-2xl">
                                        {movie.title ?? movie.name ?? movie.original_title}
                                    </Heading>
                                </div>
                                <div className="w-full flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <TooTtip content="Play this movie" className="text-sm text-black">
                                            <button className="bg-white flex items-center gap-2 px-4 py-1 rounded-md shadow-md">
                                                <Play size={24} color="black" />
                                                <span className="text-black">Play</span>
                                            </button>
                                        </TooTtip>
                                        <TooTtip content="Add this movie to your list" className="text-sm text-black">
                                            <Plus size={24} color="white" />
                                        </TooTtip>
                                        <TooTtip content="Like this movie" className="text-sm text-black">
                                            <ThumbsUp size={24} color="white" />
                                        </TooTtip>
                                    </div>
                                    <div className="p-1 flex item-center border-2 border-black rounded-full hover:border-white cursor-pointer" onClick={toggle}>
                                        {muted ? (
                                            <Volume2 size={24} color="white" />
                                        ) : (
                                            <VolumeX size={24} color="white" />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-black flex space-x-2 p-4">
                        <div className="basis-1/2 mr-1">
                            <p className="text-pretty text-white text-sm text-left">
                                {movie.overview}
                            </p>
                        </div>
                        <div className="basis-1/2 ml-1">
                            <div className="text-white text-sm lg:text-base">
                                Genre: {getGenreNames(movie.genre_ids, genres)}
                            </div>
                            <div className="text-white">
                                Avaiable: <span className="text-sm">yes</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-black">
                    <div>
                        <>
                            <h3 className="text-white pl-4 py-2 text-lg">Recommended</h3>
                        </>
                        <div className="p-4 grid grid-cols-4 place-items-center space-x-4 space-y-4">
                            {recommendedMovies.map((recommededMovie: Movie) => (
                                <RecommedCard key={recommededMovie.id} movie={recommededMovie} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}
export default CardDetail;
