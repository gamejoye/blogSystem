import React, { useEffect } from "react";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { selectUserInfo } from "../../redux/selectors/userInfoSelector";
import './index.scss'
import { Avatar } from "antd";


function Nav() {
    const userInfo = useSelector(selectUserInfo);
    const navigate = useNavigate();
    const handleButton = (value: string) => {
        navigate(`${value}`);
    }
    return (
        <>
            <ul className="menu">
                <div className="home base">
                    <a onClick={() => handleButton("home")}><HomeOutlined /></a>
                </div>
                <div className="list base">
                    <a style={{ 'cursor': 'default' }}>文章</a>
                    <div className="pull-down">
                        <a onClick={() => handleButton("classification")}>分类</a>
                        <a onClick={() => handleButton("titles")}>搜索</a>
                    </div>
                </div>
                <div className="settings">
                    <a onClick={() => handleButton("about")}>
                        <Avatar
                            size={48}
                            src={userInfo.avatarUrl}
                        />
                    </a>
                </div>
            </ul>
        </>
    )
}

export default React.memo(Nav);
