import React from "react";
import './index.css'

function Unedited(props) {
    const preState = props.preState;
    const setEdit = props.setEdit;
    const isEdit = props.isEdit;
    const type = props.type;
    const bit = type == "aboutMe" ? 0 : type == "sex" ? 1 : type == "birthday" ? 2 : 3;
    return (
        <div>
            <span className="para">
                <p className="p">{preState[type] ? preState[type] : '暂无'}</p>
                <button
                    id="aboutMeEdit"
                    onClick={() => setEdit(isEdit ^ (1 << bit))}
                >Edit</button>
            </span>
        </div>
    )
}
export default Unedited;