import React, { lazy, useEffect, useLayoutEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Markdown from "../../components/Markdown";
import { useSelector } from "react-redux";
import { selectBlogById, selectPrevAndNextBlogById } from "../../redux/selectors/blogSelector";
import './index.scss'
import lazyMarkdownImg from "../../utils/actions/lazyMarkdownImg";
import { IRootState } from "../../redux/store";
import CommentBox from "../../components/CommentBox";
import { IAnchorItem } from "./types";
import AnchorNav from "./AnchorNav";



function Post() {
    const blogId = parseInt(useParams()?.blogId ?? "0");
    const blog = useSelector((state: IRootState) => selectBlogById(state, blogId));
    const [items, setItems] = useState<IAnchorItem[]>([]);
    useEffect(() => {
        lazyMarkdownImg();
    });
    useLayoutEffect(() => {
        const newItems: IAnchorItem[] = [];
        document.querySelectorAll('h2').forEach(entry => {
            const item: IAnchorItem = {
                key: entry.id,
                href: '#' + entry.id,
                title: '' + entry.textContent
            }
            newItems.push(item);
        })
        setItems(newItems);
    }, []);
    return (
        <div className="post">
            <div className="blog">
                <Markdown content={blog ? blog.title : ''} className="header" isPreview={false} />
                <Markdown content={blog ? blog.content : ''} className="content" isPreview={false} />
            </div>
            <AnchorNav anchorItems={items} />
            <CommentBox blogId={blogId} />
        </div>
    )
}
export default React.memo(Post);