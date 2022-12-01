import { Radio } from "antd";
import React from "react";
import ShowComponent from "../ShowComponent";
function SexButton({ edit, setEdit, sex, setSex, handleSubmit, handleCancel }) {
    return (
        <>
            <p>性别：</p>
            {(!edit && <ShowComponent data={sex} setEdit={setEdit} />) || <div className="para">
                <Radio.Group onChange={(e) => (setSex(e.target.value))} defaultValue={sex}>
                    <Radio value={'男'}>男</Radio>
                    <Radio value={'女'}>女</Radio>
                </Radio.Group>
                <button onClick={() => handleSubmit()}>Submit</button>
                <button onClick={() => handleCancel()}>Cancel</button>
            </div>}
        </>
    )
}
export default SexButton;