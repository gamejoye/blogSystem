import React from "react";
import RightAside from "./RightAside";
import LeftAside from "./LeftAside";
import './index.scss'
import MiddleDetail from "./MiddleDetail";


const About = () => {
    return (
        <div className="about-container">
            <LeftAside />
            <MiddleDetail />
            <RightAside />
        </div>
    )
}
export default About;