import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { selectAllTags } from "../../redux/selectors/blogSelector";
import './index.scss'
function Classification() {
    const tags = useSelector(selectAllTags);
    const navigate = useNavigate();
    const handleTagOnClick = (tag: string) => {
        navigate(`/blogDetail/${tag}`);
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