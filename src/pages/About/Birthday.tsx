import React from "react";
import moment from "moment";
import { DatePicker } from "antd";
import { IBirthDayProps } from "./types";

function Birthday({ birthday }: IBirthDayProps) {
    return (
        <>
            <p>生日: {birthday ? birthday : '暂无'}</p>
        </>
    )
}
export default Birthday;