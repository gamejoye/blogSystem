import React from "react";
import { Button, Input, Radio } from "antd";

function AboutMe(props) {
    const preState = props.preState;
    const isEdit = props.isEdit;
    return (
        <div>
            <h1>Self-Introduction:</h1>
            <div>
                <p>个人简介:</p>
                {(isEdit & (1 << 0) &&
                    <div>
                        <input
                            defaultValue={preState["aboutMe"]}
                            onChange={(e) => props.setAboutMe(e.target.value)}
                        />
                        <button onClick={() => props.handlerSubmit("aboutMe", 0)}>Submit</button>
                        <button onClick={() => props.handlerCancel("aboutMe", 0)}>Cancel</button>
                    </div>) ||
                    <div>
                        <p>{props.preState["aboutMe"]}</p>
                        <button onClick={() => props.setEdit(isEdit ^ (1 << 0))}>Edit</button>
                    </div>
                }
                <p>性别:</p>
                {(isEdit & (1 << 1) &&
                    <div>
                        <Radio.Group onChange={(e) => (props.setSex(e.target.value))} defaultValue={preState["sex"]}>
                            <Radio value={'男'}>男</Radio>
                            <Radio value={'女'}>女</Radio>
                        </Radio.Group>
                        <button onClick={() => props.handlerSubmit("sex", 1)}>Submit</button>
                        <button onClick={() => props.handlerCancel("sex", 1)}>Cancel</button>
                    </div>) ||
                    <div>
                        <p>{props.preState["sex"]}</p>
                        <button onClick={() => props.setEdit(isEdit ^ (1 << 1))}>Edit</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default AboutMe;