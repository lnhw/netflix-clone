"use client";
import React, { useEffect, useRef, useState } from "react";
import { Bell } from "lucide-react";
import Hover from "./hover";
import styled from 'styled-components';
import axios from "axios";
import Image from "next/image";
import { BsExclamationLg } from "react-icons/bs";
import { GoPlus } from "react-icons/go";
import { SlDislike, SlLike } from "react-icons/sl";

const Notifycation = () => {

    const [notifyCount, setNotifyCount] = React.useState(0);
    const [movies, setMovies] = React.useState([]);
    const [showNotifications, setShowNotifications] = useState(true);
    const seenMovieIdsRef = useRef(new Set());
    useEffect(() => {
        const upComming = async () => {
            try {
                const res = await axios.get(`https://api.themoviedb.org/3/movie/upcoming`, {
                    params: {
                        api_key: process.env.NEXT_PUBLIC_API_KEY as string
                    }
                })
                const movies = res.data.results;
                setNotifyCount(movies.length);
                setMovies(movies);
            } catch (error) {
                console.log(error);
            }
        }
        upComming();
    }, []);

    const handleNotificationClose = () => {
        // const currentMoiedIds = movies.map((movie) => movie.id);
        // localStorage.setItem('')
        setShowNotifications(false); // Đánh dấu đã xem thông báo và ẩn danh sách
    };

    return (
        <Hover className="h-56 w-64 bg-white rounded-md shadow-md overflow-y-auto"
            content={(
                <div className="mx-2">
                    <div className="flex items-center justify-center">
                        <h3 className="px-1 py-2 text-left text-black text-xs">
                            Upcoming movies
                        </h3>
                        <BsExclamationLg className="mr-2 w-4 h-4 cursor-pointer" />
                    </div>
                    <>
                        {movies.map((movie: any) => (
                            <div className="flex px-1 py-2 shadow hover:shadow-md cursor-pointer" key={movie.id}>
                                <div className="basis-1/4 rounded-sm ">
                                    <Image src={`https://image.tmdb.org/t/p/original/${movie.poster_path ?? movie.backdrop_path}`}
                                        alt={`${movie.title ?? movie.name}`
                                        }
                                        width={60}
                                        height={60}
                                        quality={100}
                                    />
                                </div >
                                <div className="px-2 basis-3/4">
                                    <div>
                                        <div>
                                            <div className="pb-2">
                                                <p className="text-xs text-pretty text-left">
                                                    {movie.title}
                                                </p>
                                            </div>
                                            <p className="pb-2 text-[10px] text-black font-normal text-pretty text-left">
                                                Release: {movie.release_date}
                                            </p>
                                        </div>
                                        <div className="pb-2 flex items-center">
                                            <SlLike className="mr-3 w-3 h-3 cursor-pointer" />
                                            <SlDislike className="mr-3 w-3 h-3 cursor-pointer" />
                                            <GoPlus className="mr-3 w-3 h-3 cursor-pointer" />
                                        </div>
                                    </div>
                                </div>
                            </div >
                        ))}
                    </>
                </div >
            )}
            side="bottom"
            sideOffset={5}
        >
            <NotifyStyle data-count={notifyCount} data-testId="notify">
                <Bell color="white" size={20} />
            </NotifyStyle>
        </Hover >
    );
}
export default Notifycation;

const NotifyStyle = styled.div`
    position: relative;
    cursor: pointer;
    &:before {
        content: attr(data-count);
        position: absolute;
        top: -10px;
        right: -10px;
        background-color: red;
        color: white;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
    }
`;