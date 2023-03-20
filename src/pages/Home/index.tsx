import React, { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeAllSelectedTags } from "../../redux/reducers/selectedTagsReducer";
import './index.scss'
import LeftAside from "./LeftAside";
const RightAside = lazy(() => import('./RightAside'))
const Posts = lazy(() => import('./Posts'))


function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(removeAllSelectedTags());
    }, []);
    return (
        <div className="home">
            <div className="left">
                <LeftAside/>
            </div>
            <div className="middle">
                <Posts />
            </div>
            <div className="right">
                <RightAside />
            </div>
        </div>
    )
}
export default Home;