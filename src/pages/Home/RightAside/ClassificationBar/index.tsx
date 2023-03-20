import React from "react";
import { addTag, removeTag } from "../../../../redux/reducers/selectedTagsReducer";
import { useAppDispatch } from "../../../../redux/store";
import './index.scss'
import { Tag } from "antd";
import { useSelector } from "react-redux";
import { selectAllTags } from "../../../../redux/selectors/blogSelector";
import { selectSelectedTags } from "../../../../redux/selectors/tagsSelector";

const ClassificationBar = () => {
    const dispatch = useAppDispatch();
    const tags = useSelector(selectAllTags);
    const selectedTags = useSelector(selectSelectedTags);
    const handleTagOnChange = (checked: boolean, tag: string) => {
        console.log(checked)
        if(checked) dispatch(addTag(tag));
        else dispatch(removeTag(tag));
    }
    return (
        <div className="classification">
            {tags.map((tag, idx) => {
                return (
                    <Tag.CheckableTag
                        key={idx}
                        checked={selectedTags.includes(tag)}
                        className="class-tag"
                        onChange={(checked) => handleTagOnChange(checked, tag)}
                    >
                        {tag}
                    </Tag.CheckableTag>
                )
            })}
        </div>
    )
}
export default ClassificationBar;