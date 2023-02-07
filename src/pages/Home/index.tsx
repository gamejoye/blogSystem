import React, { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { removeAllSelectedTags } from "../../redux/reducers/selectedTagsReducer";
import { selectName } from "../../redux/selectors/userInfoSelector";
import './index.scss'
const Aside = lazy(() => import('./Aside'))
const Posts = lazy(() => import('./Posts'))


function Home() {
    const name = useSelector(selectName);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(removeAllSelectedTags());
    }, []);
    return (
        <div className="home">
            {name !== ""
                ? <>
                    <div className="middle">
                        <Posts />
                    </div>
                    <div className="right">
                        <Aside />
                    </div>
                </>
                : null}
        </div>
    )
}
export default Home;