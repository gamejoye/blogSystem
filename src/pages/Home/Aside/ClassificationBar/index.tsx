import React, { useEffect, useState } from "react";
import { addTag, removeTag } from "../../../../redux/reducers/selectedTagsReducer";
import { useAppDispatch } from "../../../../redux/store";
import './index.scss'

interface ITagProps {
    idx: number;
    children: any;
}
interface IProps {
    tags: string[];
}
const ClassificationBar = ({ tags }: IProps) => {
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
const Tag = ({ idx, children }: ITagProps) => {
    const dispatch = useAppDispatch();
    const [isSelected, setIsSelected] = useState(false);
    const handleOnclick = (e: React.MouseEvent) => {
        const dom = e.currentTarget;
        if (isSelected) {
            dispatch(removeTag(children));
            dom.className = 'class-tag';
        } else {
            dispatch(addTag(children));
            dom.className = 'class-tag selected-tag';
        }
        setIsSelected(!isSelected);
    }
    return (
        <span className="class-tag" key={idx} onClick={handleOnclick}>
            {children}
        </span>
    )
}
export default ClassificationBar;