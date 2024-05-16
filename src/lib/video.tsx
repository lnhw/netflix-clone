import React from "react";
import ReactPlayer, { ReactPlayerProps } from 'react-player/lazy';

interface IVideoJSProps {
    url: string | string[] | MediaStream;
    playing: boolean;
    loop: boolean;
    controls: boolean;
    light: boolean;
    volume: number;
    muted: boolean;
    playbackRate: number;
    width: number;
    height: number;
    style?: React.CSSProperties;
    className: string;
    progessInterval: number;
    playsinline: boolean;
    pip: boolean;
    stopOnmount: boolean;
    fallback: null;
    wrapper: JSX.Element;
    playIcon: boolean;
    previewTabIndex: number;
    config: () => void;
}
const VideoJS = ({
    url,
    playing,
    loop,
    controls,
    light,
    volume,
    muted,
    width,
    height,
    style,
    progessInterval,
    playsinline,
    pip,
    stopOnmount,
    fallback,
    playIcon,
    previewTabIndex,
    config,
    className
}: IVideoJSProps
) => {
    return (
        <ReactPlayer className={className}
            url={url}
            config={{
                youtube: {
                    playerVars: { showinfo: 1 }
                }
            }}
        />
    )
}
// https://medium.com/@pieecia/create-a-netflix-video-player-with-react-player-typescript-and-styled-components-2142b8003d07