import React, { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeAllSelectedTags } from "../../redux/reducers/selectedTagsReducer";
import './index.scss'
const Aside = lazy(() => import('./Aside'))
const Posts = lazy(() => import('./Posts'))


function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(removeAllSelectedTags());
    }, []);
    return (
        <div className="home">
            <div className="middle">
                <Posts />
            </div>
            <div className="right">
                <Aside />
            </div>
        </div>
    )
}
export default Home;