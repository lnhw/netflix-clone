"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";
import { ChevronDown, Play, Plus, SquareUserRound, ThumbsUp, Volume2 } from "lucide-react";
import { Movie } from "@/types/movie";
import { motion, useAnimate } from "framer-motion";
import CardDetail from "./card-detail";
import { useAppDispatch } from "@/hooks/storeHooks";
import { useSelector } from "react-redux";
import { getGenreNames } from "@/utlis";
import { getGenres, selectAllGenres } from "@/store/features/genres/genresSlice";
import { TooTtip } from "../tooltip";

type Crood = {
    x: number;
    y: number;
    width: number;
    height: number;
} | null;
const Card = ({ movie }: { movie: Movie }) => {
    const cardRef = useRef<HTMLDivElement | null>(null);
    const [cardHover, setCardHover] = useState<boolean>(false);
    const [crood, setCrood] = useState<Crood>({ x: 0, y: 0, height: 0, width: 0 });
    const [scope, animate] = useAnimate();
    const [showDetail, setShowDetail] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleMouseEnter = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget?.getBoundingClientRect();
        setCrood({
            x: rect.x,
            y: rect.y,
            width: rect.width,
            height: rect.height
        });
        setCardHover(true);
        setTimeout(() => {
            setIsAnimating(true);
        }, 500);

    }, []);

    const handleMouseLeave = useCallback(() => {
        setCrood(null);
        setCardHover(false)
        setIsAnimating(false)
    }, []);
    const handleShowDetail = () => {
        setShowDetail(true);
    };

    const handleCloseDetail = () => {
        setShowDetail(false);
    };
    const dispatch = useAppDispatch();
    const genres = useSelector(selectAllGenres);
    useEffect(() => {
        dispatch(getGenres());
    }, [dispatch]);
    return (
        <>
            <div className="w-full h-[129px] cursor-pointer "
                ref={cardRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Image className="shadow-lg rounded-lg overflow-hidden"
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                    alt={`${movie.title}`}
                    sizes="100vw"
                    fill
                    quality={100}
                    priority
                    style={{
                        objectFit: "cover"
                    }}
                />
                {cardHover && crood && ReactDOM.createPortal(
                    <motion.div
                        className="bg-black shadow-lg rounded-lg overflow-hidden"
                        initial={{ scale: 1 }}
                        animate={{ scale: isAnimating ? 1.5 : 1 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        style={{
                            position: "fixed",
                            left: `${crood.x}px`,
                            top: `${crood.y}px`,
                            // width: `${crood.width}px`,
                            // height: `${crood.height}px`,
                            zIndex: 10,
                            display: "flex",
                            flexDirection: isAnimating ? "column" : "row",
                        }}
                    >
                        <div style={{
                            position: "relative",
                            width: `${crood.width}px`,
                            height: `${crood.height}px`,
                        }}>
                            <Image
                                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                                alt={`${movie.title ?? movie.name}`}
                                fill
                                objectFit="cover"
                            />
                        </div>
                        <div className={`${isAnimating ? "visible" : "hidden"}`}
                            style={{
                                width: `${crood.width}px`
                            }}
                        >
                            <div className="p-2">
                                <div className="flex item-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <TooTtip className="text-[10px] text-black text-pretty font-normal" content="Play this movie">
                                            <Play
                                                className="hover:text-white p-1 border-soild border-gray-700 border-2 hover:border-white rounded-full"
                                                size={25}
                                                color="gray"
                                            />
                                        </TooTtip>
                                        <TooTtip className="text-[10px] text-black text-pretty font-normal" content="Add this movie to your list">
                                            <Plus
                                                className="hover:text-white p-1 border-soild border-gray-700 border-2 hover:border-white rounded-full"
                                                size={25}
                                                color="gray"
                                            />
                                        </TooTtip>
                                        <TooTtip className="text-[10px] text-black text-pretty font-normal" content="Rate this movie" >
                                            <ThumbsUp
                                                className="hover:text-white p-1 border-soild border-gray-700 border-2 hover:border-white rounded-full"
                                                size={25}
                                                color="gray"
                                            />
                                        </TooTtip>
                                    </div>
                                    <div>
                                        <TooTtip className="text-[10px] text-black text-pretty font-normal" content="Show detail">
                                            <ChevronDown
                                                className="hover:text-white p-1 border-soild border-gray-700 border-2 hover:border-white rounded-full"
                                                size={25}
                                                color="gray"
                                                onClick={handleShowDetail}
                                            />
                                        </TooTtip>
                                    </div>
                                </div>
                                <div className="py-2">
                                    <p className="text-green-700 text-sm text-petty font-bold">
                                        {movie.title ?? movie.name ?? movie.original_title}
                                    </p>
                                </div>
                                <div className="pb-2">
                                    <p className="text-white text-xs text-wrap">
                                        {getGenreNames(movie.genre_ids, genres)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div >,
                    document.body
                )}
            </div >
            {showDetail && (
                <CardDetail
                    movie={movie}
                    onClose={handleCloseDetail}
                />
            )
            }
        </>
    );
}
export default Card;