import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTag } from "../../../../redux/actions";
import './index.css'
function Tag({ idx, children }) {
    const dispatch = useDispatch();
    const handleOnclick = () => {
        dispatch(setTag(children));
    }
    return (
        <span className="class-tag" key={idx} onClick={handleOnclick}>
            {children}
        </span>
    )
}
function ClassificationBar({tags}) {
    useEffect(()=>{}, [tags.length]);
    return (
        <div className="classification">
            {(tags.length == 0 && <div className="classification-empty">
                在您发布或删除博客后 这里会自动更新
            </div>) || tags.map((tag, idx) => {
                return (
                    <Tag key={idx} idx={idx} >
                        {tag}
                    </Tag>
                )
            })}
        </div>
    )
}
export default ClassificationBar;