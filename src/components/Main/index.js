import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ErrorBoundary from "../ErrorBoundady";

const Home = lazy(() => import('../../pages/Home'));
const Titles = lazy(() => import('../../pages/Titles'));
const Post = lazy(() => import('../../pages/Post'));
const Creation = lazy(() => import('../../pages/Creation'));
const About = lazy(() => import('../../pages/About'));

class Main extends React.Component {

    render() {
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <ErrorBoundary>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/titles" element={<Titles />}></Route>
                        <Route path="/post" element={<Post />}></Route>
                        <Route path="/creation" element={<Creation />}></Route>
                        <Route path="/about" element={<About />}></Route>
                        <Route path='*' element={<Navigate to='/' replace />} />
                    </Routes>
                </ErrorBoundary>
            </Suspense>
        )
    }
}

export default Main;