
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Movie } from "@/types/movie";
import { Heading, Text, Box, Flex } from "@radix-ui/themes";
import { HeartIcon, Info, Play, Volume2, VolumeX } from "lucide-react";
import ReactPlayer from "react-player/lazy";
import { css } from '@emotion/css'
import styled from '@emotion/styled'

interface IMovie {
    movie: Movie;
    trailer: string | null;
}

const PlyWrapper = styled.div`
    position: relative;
    padding-top: 56.25%;
    width: 100%;
    height: 800px;
    //Media query cho tablet/ipad
    @media (max-width: 1024px){
        height: 400px;
    }
`
const ReactPyer = styled(ReactPlayer)`
    position: absolute;
    top: 0;
    left: 0;
    width : 100%;
    height : 100%;
    video {
        object-fit: cover;
    }
`
const Billboard: React.FC<IMovie> = ({ movie, trailer }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [playVideo, setPlayVideo] = useState<boolean>(false);
    const [muted, setMuted] = useState(false);
    const [blurredImageUrl, setBulteredImageUrl] = useState<string | null>(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const timer = setTimeout(() => {
            setPlayVideo(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);
    const toggleMuted = () => {
        setMuted(!muted);
    }


    return (
        <Box>
            <div className="h-full w-full">
                <PlyWrapper className="relative md:min-h-[400px] lg:min-h-[700px]">
                    {trailer && playVideo ?
                        (<ReactPyer
                            width="100%"
                            height="100%"
                            playing={true}
                            url={`https://www.youtube.com/watch?v=${trailer}`}
                            config={{
                                youtube: {
                                    playerVars: { showinfo: 1 }
                                }
                            }}
                            muted={muted}
                        />
                        ) : (
                            <Image
                                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                                alt={`${movie.name ?? movie.title}`}
                                fill
                                sizes="(max-width:896px)100vw,896px"
                                quality={100}
                            />
                        )}
                    <Box className="absolute bottom-10">
                        <Box className="flex flex-col justify-center md:w-[250px] md:h-[300px] md:ml-[30px] lg:w-[500px] lg:h-[400px] lg:ml-[60px]">
                            <Box className="md:mb-3 lg:mb-3">
                                <Heading as="h2" className="text-white text-pretty lg:text-left lg:text-[48px] lg:font-black lg:mb-5">
                                    {movie?.name ?? movie.title ?? movie.original_title}
                                </Heading >
                                <Text as="p" className="text-white text-pretty font-normal lg:text-lg">{movie?.overview}</Text>
                            </Box>
                            <Flex className="md:space-x-3" display="flex" align="center" justify="between" >
                                <Flex display="flex" align="center" justify="between" className=" px-2 py-1 bg-white space-x-4 rounded-lg">
                                    <Play color="black" size={30} />
                                    <Text as="p" className="text-black text-sm font-medium">Play</Text>
                                </Flex>
                                <Flex display="flex" align="center" justify="between" className=" px-2 py-1 bg-[#9ca3af] hover:bg-[#e5e7eb] space-x-4 rounded-lg">
                                    <Info color="white" size={30} />
                                    <Text as="p" className="text-white text-sm font-medium md:text-nowrap md:text-xs">Xem thêm thông tin</Text>
                                </Flex>
                            </Flex>
                        </Box>
                    </Box>
                    <Box className="absolute md:bottom-[10rem] md:right-2 lg:right-[2rem] border border-white border-solid p-1 rounded-full">
                        <div onClick={toggleMuted}>
                            {muted ? (
                                <VolumeX color="white" size={30} />
                            ) : (
                                <Volume2 color="white" size={30} />
                            )}
                        </div>
                    </Box>
                </PlyWrapper>
            </div >
        </ Box >
    );
}
export default Billboard;