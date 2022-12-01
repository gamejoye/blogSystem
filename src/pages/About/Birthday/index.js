import React from "react";
import moment from "moment";
import { DatePicker } from "antd";
import ShowComponent from "../ShowComponent";

function Birthday({ edit, setEdit, birthday, setBirthday, handleCancel, handleSubmit }) {
    const dateForm = 'YYYY-MM-DD';
    return (
        <>
            <p>生日：</p>
            {(!edit && <ShowComponent data={birthday} setEdit={setEdit}/>) || <div>
                <DatePicker className="calendar" placeholder="请设置您的出生日期"
                    onChange={(e) => setBirthday(moment(e._d).format(dateForm))}
                    showToday={true}
                />
                <button onClick={() => handleSubmit()}>Submit</button>
                <button onClick={() => handleCancel()}>Cancel</button>
            </div>}
        </>
    )
}
export default Birthday;