import React from "react";
import { Radio, DatePicker } from "antd";
import moment from "moment";
import './index.css'

import Unedited from "./Unedited";

const dateForm = 'YYYY-MM-DD';

function AboutMe(props) {
    const preState = props.preState;
    const isEdit = props.isEdit;
    return (
        <div>
            <h1>Self-Introduction:</h1>
            <div>
                <p>个人介绍:</p>
                {(isEdit & (1 << 0) &&
                    <div className="para">
                        <textarea
                            className="aboutMe"
                            defaultValue={preState["aboutMe"]}
                            onChange={(e) => props.setAboutMe(e.target.value)}
                        /><br />
                        <button onClick={() => props.handlerSubmit("aboutMe", 0)}>Submit</button>
                        <button onClick={() => props.handlerCancel("aboutMe", 0)}>Cancel</button>
                    </div>) ||
                    <Unedited
                        preState={preState}
                        type="aboutMe"
                        setEdit={props.setEdit}
                    />
                }
                <p>性别:</p>
                {(isEdit & (1 << 1) &&
                    <div className="para">
                        <Radio.Group onChange={(e) => (props.setSex(e.target.value))} defaultValue={preState["sex"]}>
                            <Radio value={'男'}>男</Radio>
                            <Radio value={'女'}>女</Radio>
                        </Radio.Group>
                        <button onClick={() => props.handlerSubmit("sex", 1)}>Submit</button>
                        <button onClick={() => props.handlerCancel("sex", 1)}>Cancel</button>
                    </div>) ||
                    <Unedited
                        preState={preState}
                        type="sex"
                        setEdit={props.setEdit}
                    />
                }
                <p>生日:</p>
                {(isEdit & (1 << 2)) &&
                    <div className="para">
                        <DatePicker className="calendar" placeholder="请设置您的出生日期"
                            onChange={(e) => props.setBirthday(moment(e._d).format(dateForm))}
                            showToday={true}
                        //onChange={(e) => console.log(moment(e._d).format('YYYY-MM-DD'))}
                        />
                        <button onClick={() => props.handlerSubmit("birthday", 2)}>Submit</button>
                        <button onClick={() => props.handlerCancel("birthday", 2)}>Cancel</button>
                    </div> ||
                    <Unedited
                        preState={preState}
                        type="birthday"
                        setEdit={props.setEdit}
                    />
                }
            </div>
        </div>
    )
}

export default AboutMe;