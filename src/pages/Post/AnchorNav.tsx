import React from "react";
import { IAnchorItem } from "./types";
import './index.scss'

interface IProps {
    anchorItems: IAnchorItem[]
}
const AnchorNav = ({ anchorItems }: IProps) => {
    const anchorLinks = anchorItems.map(anchorItem => {
        return (
            <div className="anchor-link" key={anchorItem.key}>
                <a className="anchor-link-title" href={anchorItem.href}>
                    {anchorItem.title}
                </a>
            </div>
        )
    })
    return (
        <div className="anchor-container">
            {anchorLinks}
        </div>
    )
}
export default AnchorNav;