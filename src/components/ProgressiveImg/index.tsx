import React, { useEffect, useState } from "react";
import './index.scss'
interface IProps {
    placeholderSrc: string;
    src: string;
}
const ProgressiveImg = ({ placeholderSrc, src, ...props }: IProps) => {
    const [imgSrc, setImgSrc] = useState(placeholderSrc || src);
    const customClass = placeholderSrc && imgSrc === placeholderSrc ? 'loading' : 'loaded'
    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => setImgSrc(src);
    }, [src]);
    return (
        <img
            {...{ src: imgSrc, ...props }}
            alt={(props as any)?.alt || ""}
            className={`image ${customClass}`}
        />
    )
}
export default ProgressiveImg;