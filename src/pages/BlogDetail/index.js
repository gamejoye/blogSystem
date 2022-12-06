import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { selectTitlesByTag } from "../../redux/selectors/blogSelector";
import '../Classification/index.css'
function BlogDetail() {
    const localtion = useLocation();
    const navigate = useNavigate();
    const { tag } = localtion.state;
    const titles = useSelector((state) => selectTitlesByTag(state, tag));
    const handleTitleOnClick = (title) => {
        navigate('/post?title=' + title, { state: { title: title } });
    }
    return (
        <div className="border-container">
            {titles.map((title, idx) => {
                return (<div onClick={() => handleTitleOnClick(title)} key={idx} className="content-show title-show">
                    {title}
                </div>)
            })}
        </div>
    )
}
export default BlogDetail;