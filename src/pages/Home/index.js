import React, { lazy } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './index.css'
import Classification from "./Aside/ClassificationBar";
import { selectAllBlogs, selectFilterBlogs } from "../../redux/selectors/blogSelector";
import { selectName } from "../../redux/selectors/userInfoSelector";
import { selectAllTags } from "../../redux/selectors/blogSelector";
import { removeAllTags } from "../../redux/reducers/selectedTagsReducer";
const Posts = lazy(() => import('./Posts'))
const SelfCard = lazy(() => import('./Aside/SelfCard'))


function Home() {
    const dispatch = useDispatch();
    const username = useSelector(selectName);
    const tags = useSelector(selectAllTags);
    const allBlogs = useSelector(selectAllBlogs);
    const totalBlogs = useSelector(selectFilterBlogs);
    useEffect(() => {
        dispatch(removeAllTags());
    }, [username, allBlogs]);
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