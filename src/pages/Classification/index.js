import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { selectTags } from "../../redux/selectors/tagSelector";
import './index.css'
function Classification() {
    const tags = useSelector(selectTags);
    const navigate = useNavigate();
    const handleTagOnClick = (tag) => {
        navigate('/blogDetail?tag=' + tag, { state: { tag: tag } });
    }
    return (
        <div className="border-container">
            {tags.map((tag, idx) => {
                return (
                    <div className="content-show tag-show" onClick={() => handleTagOnClick(tag)} key={idx}>
                        {tag}
                    </div>
                )
            })}
        </div>
    )
}
export default Classification;