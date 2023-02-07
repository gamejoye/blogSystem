import React, { useRef, useState } from "react";
import ProgressiveImg from "../ProgressiveImg";
import useIntersectionObserver from "../../utils/hooks/useIntersectionObserver";
import thiny from "../../images/thiny/1.png"
import './index.css'

interface IProps {
    height: number;
    width: number;
    src: string;
}

const ImageContainer = ({ height, width, src }: IProps) => {
    const ratio = height / width * 100;
    const containerStyle = {
        height: height,
        width: width,
        marginBottom: `${ratio}px`
    }
    const ref = useRef<HTMLElement>();
    const [isVisible, setIsVisible] = useState(false);
    useIntersectionObserver({
        dom: ref.current,
        onIntersect: (
            [{ isIntersecting }]: IntersectionObserverEntry[],
            observerElement
        ) => {
            if (isIntersecting) {
                setIsVisible(true);
                if (ref.current) observerElement.unobserve(ref.current);
            }
        }
    })
    return (
        <div
            className="image-container"
            style={containerStyle}
            ref={ref as any}
        >
            {isVisible && (
                <ProgressiveImg placeholderSrc={thiny} src={src} />
            )}
        </div>
    )
}
export default ImageContainer;