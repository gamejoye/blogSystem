import React, { lazy } from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import './index.css'
import Classification from "./Aside/ClassificationBar";
import { selectFilterBlogs, selectName, selectTags } from "../../redux/selectors";
const Posts = lazy(() => import('./Posts'))
const SelfCard = lazy(() => import('./Aside/SelfCard'))


function Home() {
    const username = useSelector(selectName);
    const tags = useSelector(selectTags);
    const totalBlogs = useSelector(selectFilterBlogs);
    useEffect(() => {
    }, [username, totalBlogs]);
    return (
        <div>
            <div className="home">
                <div className="middle">
                    <Posts totalBlogs={totalBlogs} />
                </div>
                {username && (<div className="right">
                    <SelfCard />
                    <Classification totalBlogs={totalBlogs} tags={tags} />
                </div>)}
            </div>
        </div>
    )
}
export default Home;