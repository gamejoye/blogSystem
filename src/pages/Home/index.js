import React, { lazy } from "react";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getInstance } from "../../utils/apis/axiosConfig";
import './index.css'
const Posts = lazy(() => import('./Posts'))
const SelfCard = lazy(() => import('./Aside/SelfCard'))


function Home(props) {
    const username = props.name
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        getInstance.get('blogs/byName', {
            params: {
                username: username
            }
        }).then(
            (res) => {
                setBlogs(res.data);
            }
        )
    });
    return (
        <div>
            <div className="home">
                <div className="middle">
                    <Posts blogs={blogs} />
                </div>
                <div className="right">
                    <SelfCard />
                </div>
            </div>
        </div>
    )
}
export default connect(
    (state) => ({
        name: state.name
    })
)(Home);