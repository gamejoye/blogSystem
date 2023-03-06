import React, { useState } from "react";
import { IAnchorItem } from "./types";
import './index.scss'
import { Anchor, Button, ConfigProvider } from "antd";

interface IProps {
    anchorItems: IAnchorItem[]
}
const AnchorNav = ({ anchorItems }: IProps) => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorTextBase: 'white'
                }
            }}
        >
            <div className="anchor-container-fixed">
                <Anchor
                    targetOffset={200}
                    getContainer={() => document.querySelector('main') as HTMLElement}
                    items={anchorItems}
                />
            </div>
        </ConfigProvider>
    )
}
export default AnchorNav;