import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import SexButton from "./SexButton";
import AboutMe from './AboutMe';
import Birthday from "./Birthday";
import { selectUserInfo } from "../../redux/selectors/userInfoSelector";
import { Divider } from "antd";
import { updateUserInfo } from "../../utils/apis/axios/api";
import { setUserInfo } from "../../redux/reducers/userInfoReducer";

function About() {
    const information = useSelector(selectUserInfo);
    const { sex: preSex, birthday: preBirthday, aboutMe: preAboutMe } = information;
    const [sex, setSex] = useState(preSex);
    const [aboutMe, setAboutMe] = useState(preAboutMe);
    const [birthday, setBirthday] = useState(preBirthday);
    const dispatch = useDispatch();
    const [aboutMeEdit, setAboutMeEdit] = useState(false);
    const [sexButtonEdit, setSexButtonEdit] = useState(false);
    const [birthdayEdit, setBirthdayEdit] = useState(false);
    const handleSubmit = (setEdit) => {
        setEdit(false);
        const newInformation = {
            ...information,
            sex: sex,
            aboutMe: aboutMe,
            birthday: birthday
        };
        dispatch(setUserInfo(newInformation))
        //axios请求
        updateUserInfo(newInformation);
    };
    const handleCancel = (setEdit) => {
        setSex(preSex);
        setAboutMe(preAboutMe);
        setBirthday(preBirthday);
        setEdit(false);
    }
    return (
        <div>
            <AboutMe
                aboutMe={information.aboutMe} setAboutMe={setAboutMe}
                handleCancel={() => handleCancel(setAboutMeEdit)} handleSubmit={() => handleSubmit(setAboutMeEdit)}
                edit={aboutMeEdit} setEdit={setAboutMeEdit}
            /><Divider />
            <SexButton
                sex={information.sex} setSex={setSex}
                handleCancel={() => handleCancel(setSexButtonEdit)} handleSubmit={() => handleSubmit(setSexButtonEdit)}
                edit={sexButtonEdit} setEdit={setSexButtonEdit}
            /><Divider />
            <Birthday
                birthday={information.birthday} setBirthday={setBirthday}
                handleCancel={() => handleCancel(setBirthdayEdit)} handleSubmit={() => handleSubmit(setBirthdayEdit)}
                edit={birthdayEdit} setEdit={setBirthdayEdit}
            />
        </div>
    )
}
export default About;