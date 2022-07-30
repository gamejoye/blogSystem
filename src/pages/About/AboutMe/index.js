import React from "react";
import { Button, Radio, DatePicker } from "antd";
import moment from "moment";
import './index.css'

const dateForm = 'YYYY-MM-DD';

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
                        <textarea
                            className="aboutMe"
                            defaultValue={preState["aboutMe"]}
                            onChange={(e) => props.setAboutMe(e.target.value)}
                        /><br />
                        <Button onClick={() => props.handlerSubmit("aboutMe", 0)}>Submit</Button>
                        <Button onClick={() => props.handlerCancel("aboutMe", 0)}>Cancel</Button>
                    </div>) ||
                    <div>
                        <p>{props.preState["aboutMe"]}</p>
                        <Button onClick={() => props.setEdit(isEdit ^ (1 << 0))}>Edit</Button>
                    </div>
                }
                <p>性别:</p>
                {(isEdit & (1 << 1) &&
                    <div>
                        <Radio.Group onChange={(e) => (props.setSex(e.target.value))} defaultValue={preState["sex"]}>
                            <Radio value={'男'}>男</Radio>
                            <Radio value={'女'}>女</Radio>
                        </Radio.Group>
                        <Button onClick={() => props.handlerSubmit("sex", 1)}>Submit</Button>
                        <Button onClick={() => props.handlerCancel("sex", 1)}>Cancel</Button>
                    </div>) ||
                    <div>
                        <p>{props.preState["sex"]}</p>
                        <Button onClick={() => props.setEdit(isEdit ^ (1 << 1))}>Edit</Button>
                    </div>
                }
                <p>生日:</p>
                {(isEdit & (1 << 2)) &&
                    <div>
                        <DatePicker className="calendar" placeholder="请设置您的出生日期"
                            onChange={(e) => props.setBirthday(moment(e._d).format(dateForm))}
                            showToday={true}
                            //onChange={(e) => console.log(moment(e._d).format('YYYY-MM-DD'))}
                        />
                        <Button onClick={() => props.handlerSubmit("birthday", 2)}>Submit</Button>
                        <Button onClick={() => props.handlerCancel("birthday", 2)}>Cancel</Button>
                    </div> ||
                    <div>
                        <p>{props.preState["birthday"]}</p>
                        <Button onClick={() => props.setEdit(isEdit ^ (1 << 2))}>Edit</Button>
                    </div>
                }
            </div>
        </div>
    )
}

export default AboutMe;