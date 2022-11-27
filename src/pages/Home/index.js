import React, { lazy } from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getInstance } from "../../utils/apis/axiosConfig";
import './index.css'
import Classification from "./Aside/Classification";
import { selectName } from "../../redux/selectors";
const Posts = lazy(() => import('./Posts'))
const SelfCard = lazy(() => import('./Aside/SelfCard'))


function Home(props) {
    const username = useSelector(selectName);
    const [totalBlogs, setTototalBlogs] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [tags, setTags] = useState([]);
    const [renderTag, setRenderTag] = useState(0);
    useEffect(() => {
        getInstance.get('blogs/byName', {
            params: {
                username: username,
            }
        }).then(
            (res) => {
                setBlogs(res.data);
                setTototalBlogs(res.data);
                for (let i = 0; i < res.data.length; i++) {
                    let blog = res.data[i];
                    if (!blog.tags) continue;
                    blog.tags.forEach((tag) => {
                        if (!tags.includes(tag)) tags.push(tag);
                    })
                };
            }
        )
    }, [username, renderTag]);
    return (
        <div>
            <div className="home">
                <div className="middle">
                    <Posts blogs={blogs} update={setRenderTag} tag={renderTag} />
                </div>
                {username && (<div className="right">
                    <SelfCard />
                    <Classification setBlogs={setBlogs} blogs={totalBlogs} tags={tags} />
                </div>)}
            </div>
        </div>
    )
}
export default Home;