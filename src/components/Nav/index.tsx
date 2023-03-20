import React from "react";
import { Menu, MenuProps } from 'antd';
import { GithubFilled, HomeOutlined, SettingFilled, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { selectUserInfo } from "../../redux/selectors/userInfoSelector";
import './index.scss'
import { Avatar, Dropdown, Space } from "antd";
import { Layout } from "antd";
import { GITHUB_URL } from "../../constant";
const { Header } = Layout
function Nav() {
    const userInfo = useSelector(selectUserInfo);
    const navigate = useNavigate();
    const handleNavigate = (value: string) => {
        navigate(`${value}`);
    }
    const handleButton: MenuProps['onClick'] = (e) => {
        handleNavigate(e.key);
    };
    const articleItems: any[] = [
        {
            label: '分类',
            key: 'classification',
        },
        {
            label: '搜索',
            key: 'titles',
        },
    ];
    return (
        <Header className="header">
            <Menu className="header-menu" style={{
                boxShadow: '0px 0px 2px 5px #f5f5f5',
            }}>
                <a className="home base"
                    onClick={() => handleNavigate("home")}
                >
                    <HomeOutlined />
                </a>
                <Dropdown
                    menu={{
                        items: articleItems,
                        onClick: handleButton
                    }}
                >
                    <Space>
                        <div className="base">articles</div>
                    </Space>
                </Dropdown>
                <a className="base"
                    onClick={() => handleNavigate("about")}
                >
                    about
                </a>
                <a className="base right-item"
                    href={GITHUB_URL}
                >
                    <GithubFilled />
                </a>
            </Menu>
        </Header>
    )
}

export default React.memo(Nav);
