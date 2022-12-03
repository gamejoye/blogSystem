import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import SexButton from "./SexButton";
import AboutMe from './AboutMe';
import Birthday from "./Birthday";
import { selectUserInfo } from "../../redux/selectors/userInfoSelector";
import { Divider } from "antd";
import { updateUserInfo } from "../../utils/apis/axios/actions";
import { setAboutMe as aboutMeAction, setSex as sexAction, setBirthday as birthdayAction } from "../../redux/reducers/userInfoReducer";

function About() {
    const information = useSelector(selectUserInfo);
    const dispatch = useDispatch();
    const setSex = (sex) => dispatch(sexAction(sex));
    const setAboutMe = (text) => dispatch(aboutMeAction(text));
    const setBirthday = (birthday) => dispatch(birthdayAction(birthday));
    const [aboutMeEdit, setAboutMeEdit] = useState(false);
    const [sexButtonEdit, setSexButtonEdit] = useState(false);
    const [birthdayEdit, setBirthdayEdit] = useState(false);
    const handleSubmit = (setEdit) => {
        setEdit(false);
        //axios请求
        updateUserInfo(information);
    };
    const handleCancel = (setEdit) => {
        setEdit(false);
    }
    return (
        <div>
            <AboutMe
                aboutMe={information.aboutMe} setAboutMe={setAboutMe}
                handleCancel={() => handleCancel(setAboutMeEdit)} handleSubmit={() => handleSubmit(setAboutMeEdit)}
                edit={aboutMeEdit} setEdit={setAboutMeEdit}
            /><Divider/>
            <SexButton
                sex={information.sex} setSex={setSex}
                handleCancel={() => handleCancel(setSexButtonEdit)} handleSubmit={() => handleSubmit(setSexButtonEdit)}
                edit={sexButtonEdit} setEdit={setSexButtonEdit}
            /><Divider/>
            <Birthday
                birthday={information.birthday} setBirthday={setBirthday}
                handleCancel={() => handleCancel(setBirthdayEdit)} handleSubmit={() => handleSubmit(setBirthdayEdit)}
                edit={birthdayEdit} setEdit={setBirthdayEdit}
            />
        </div>
    )
}
export default About;