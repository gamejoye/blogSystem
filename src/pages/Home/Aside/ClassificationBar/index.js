import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTag, removeTag } from "../../../../redux/reducers/selectedTagsReducer";
import './index.css'
function Tag({ idx, children }) {
    const dispatch = useDispatch();
    const [isSelected, setIsSelected] = useState(false);
    const handleOnclick = (e) => {
        const dom = e.target;
        if(isSelected) {
            dispatch(removeTag(children));
            dom.className = 'class-tag';
        } else {
            dispatch(addTag(children));
            dom.className = 'class-tag selected-tag';
        }
        setIsSelected(!isSelected);
    }
    return (
        <span className="class-tag" key={idx} onClick={(e) => handleOnclick(e)}>
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