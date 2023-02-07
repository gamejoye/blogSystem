import React from "react";
import { IAboutMeProps } from "./types";
import './index.scss'

function AboutMe({ aboutMe }: IAboutMeProps) {
    return (
        <>
            <p>个人介绍: {aboutMe ? aboutMe : '暂无'}</p>
        </>
    )
}
export default AboutMe;