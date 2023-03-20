import { Col, Timeline, TimelineItemProps } from "antd";
import React from "react";
import './index.scss'

const LeftAside = () => {
    const timeItems: TimelineItemProps[] = [{
        children: '图片上传功能',
        label: '2022.10.25',
        color: 'gray'
    }, {
        children: '更换一些样式和基础功能',
        label: '2022.10.28',
        color: 'gray'
    }, {
        children: '删除了博客后台管理',
        label: '2023.2.7',
    }, {
        children: '大部分改用为antd-v5组件',
        label: '2023.3.20',
        color: 'green'
    }]
    return (
        <div
            className="sub-left-about-container"
        >
            <Timeline
                mode="right"
                items={timeItems}
            />
        </div>
    )
}
export default LeftAside;