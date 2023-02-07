import React from "react";
import { ISexProps } from "./types";
function SexButton({ sex }: ISexProps) {
    return (
        <>
            <p>性别: {sex ? sex : '暂无'}</p>
        </>
    )
}
export default SexButton;