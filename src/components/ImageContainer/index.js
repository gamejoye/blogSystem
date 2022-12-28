import React, { useRef, useState } from "react";
import ProgressiveImg from "../pages/ProgressiveImg";
import useIntersectionObserver from "../../utils/hooks/useIntersectionObserver";
import thiny from "../images/thiny.jpeg"
import './index.css'
const ImageContainer = ({ height, width, src }) => {
    const ratio = height / width * 100;
    const containerStyle = {
        height: height,
        width: width,
        marginBottom: `${ratio}px`
    }
    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);
    useIntersectionObserver({
        target: ref,
        onIntersect: ([{ isIntersecting }], observerElement) => {
            if (isIntersecting) {
                setIsVisible(true);
                observerElement.unobserve(ref.current);
            }
        }
    })
    return (
        <div
            className="image-container"
            style={containerStyle}
            ref={ref}
        >
            {isVisible && (
                <ProgressiveImg placeholderSrc={thiny} src={src}/>
            )}
        </div>
    )
}
export default ImageContainer;