import React from "react";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { selectName } from "../../redux/selectors/userInfoSelector";
import './index.scss'


function Nav() {
    const name = useSelector(selectName);
    const navigate = useNavigate();
    const handleButton = (value: string) => {
        navigate(`${value}`);
    }
    return (
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
            <div className="settings base">
                <a onClick={() => handleButton("about")}><UserOutlined /> {name}</a>
            </div>
        </ul>
    )
}

export default React.memo(Nav);
