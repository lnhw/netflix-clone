import React from "react";

interface IFrameProps {
    src: string;
    width?: number;
    height?: number;
    frameBorder?: string; // Corrected casing and made optional
    allowFullScreen?: boolean; // Made optional to match your default props
    sandbox?: string; // Corrected type to string
    loading?: "eager" | "lazy"; // Restricted type to the valid values
    title: string;
}

const Iframe: React.FC<IFrameProps> = ({
    src,
    width,
    height,
    frameBorder = "0", // Corrected casing
    allowFullScreen = true,
    sandbox, // Removed default boolean value since it's a string
    loading,
    title
}) => {
    return (
        <iframe
            src={src}
            width={width ? width.toString() : undefined} // Ensure width and height are either string or undefined
            height={height ? height.toString() : undefined}
            frameBorder={frameBorder} // Corrected casing
            allowFullScreen={allowFullScreen}
            sandbox={sandbox}
            loading={loading}
            title={title}
        />
    );
}
