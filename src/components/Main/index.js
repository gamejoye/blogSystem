import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Home from '../../pages/Home';
import Titles from "../../pages/Titles";
import Post from "../../pages/Post";
import Creation from "../../pages/Creation";
import Way from "../../pages/Way";
import About from "../../pages/About";

class Main extends React.Component {
    
    render() {
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/titles" element={<Titles />}></Route>
                    <Route path="/post" element={<Post />}></Route>
                    <Route path="/creation" element={<Creation />}></Route>
                    <Route path="/login" element={<Way action="login" />}></Route>
                    <Route path="/about" element={<About/>}></Route>
                    <Route path='*' element={<Navigate to='/' replace />} />
                </Routes>
            </Suspense>
        )
    }
}

export default Main;