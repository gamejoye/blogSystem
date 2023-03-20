import React from "react";
import { IAnchorItem } from "./types";
import './index.scss'
import { Anchor } from "antd";

interface IProps {
    anchorItems: IAnchorItem[]
}
const AnchorNav = ({ anchorItems }: IProps) => {
    return (
        <div className="anchor-container-fixed">
            <Anchor
                items={anchorItems}
            />
        </div>
    )
}
export default AnchorNav;