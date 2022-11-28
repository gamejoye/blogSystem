import React from "react";
import { getInstance, postInstance } from "../../utils/apis/axios/axiosConfig";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import AboutMe from "./AboutMe";
import { selectName } from "../../redux/selectors";

function About(props) {
    
    const username = useSelector(selectName);
    const [sex,setSex] = useState('');
    const [address,setAddress] = useState('');
    const [birthday,setBirthday] = useState('');
    const [aboutMe, setAboutMe] = useState('');
    const [isEdit, setEdit] = useState(0);
    const [preState, setPreState] = useState({});
    useEffect(() => {
        getInstance.get('user/introduction', {
            params: {
                username: username
            }
        }
        ).then(
            (res) => {
                const uInfo = res.data;
                setAboutMe(uInfo.aboutMe);
                setAddress(uInfo.address);
                setBirthday(uInfo.birthday);
                setSex(uInfo.sex);
                setPreState(uInfo);
            }
        )
    }, []);

    function handlerSubmit(type,bit) {
        const data = type=='aboutMe'?aboutMe:type=='address'?address:type=='sex'?sex:birthday;
        postInstance.post('user/' + 'edit', {
            username: username,
            [type]: data
        });
        setPreState({username,sex,address,birthday,aboutMe});
        setEdit(isEdit^(1<<bit));
    }

    function handlerCancel(type,bit) {
        if(type === "aboutMe") setAboutMe(preState.aboutMe);
        else if(type === "sex") setSex(preState.sex);
        else if(type === "birthday") setBirthday(preState.birthday);
        else if(type === "address") setAddress(preState.address);
        setEdit(isEdit^(1<<bit));
    }
    return (
        <div>
            <AboutMe
                isEdit = {isEdit}
                setEdit = {setEdit}
                setAboutMe = {setAboutMe}
                setSex = {setSex}
                setBirthday = {setBirthday}
                preState = {preState}
                handlerCancel = {handlerCancel}
                handlerSubmit = {handlerSubmit}
            />
        </div>
    )
}

export default About;