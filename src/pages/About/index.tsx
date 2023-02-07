import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import SexButton from "./SexButton";
import AboutMe from './AboutMe';
import Birthday from "./Birthday";
import { selectUserInfo } from "../../redux/selectors/userInfoSelector";
import { Divider } from "antd";

const About = () => {
    const information = useSelector(selectUserInfo);
    return (
        <div>
            <AboutMe
                aboutMe={information.aboutMe}
            /><Divider />
            <SexButton
                sex={information.sex}
            /><Divider />
            <Birthday
                birthday={information.birthday}
            />
        </div>
    )
}
export default About;