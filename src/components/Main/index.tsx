import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import BlogDetail from "../../pages/BlogDetail";
import ErrorBoundary from "../ErrorBoundady";
import './index.scss'
import { Layout } from "antd";
const { Content } = Layout

const Home = lazy(() => import('../../pages/Home'));
const Titles = lazy(() => import('../../pages/Titles'));
const Post = lazy(() => import('../../pages/Post'));
const About = lazy(() => import('../../pages/About'));
const Classification = lazy(() => import('../../pages/Classification'))

class Main extends React.Component {

    render() {
        return (
            <Content>
                <Suspense fallback={<></>}>
                    <ErrorBoundary>
                        <Routes>
                            <Route path="/" element={<Home />}></Route>
                            <Route path="/titles" element={<Titles />}></Route>
                            <Route path="/post/:blogId" element={<Post />}></Route>
                            <Route path="/about" element={<About />}></Route>
                            <Route path="/classification" element={<Classification />}></Route>
                            <Route path="/blogDetail/:tag" element={<BlogDetail />}></Route>
                            <Route path='*' element={<Navigate to='/' replace />} />
                        </Routes>
                    </ErrorBoundary>
                </Suspense>
            </Content>
        )
    }
}

export default Main;