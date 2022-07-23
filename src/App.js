import React from 'react';
import { getCookie } from './utils/apis/getCookie';


import Main from './components/Main';
import Nav from './components/Nav';
import Way from './components/Way';
import { Layout } from 'antd';

function App(props) {
    const username = getCookie("username");

    if (!username) { return <Way action="login"></Way> }
    return (
        <Layout>
            <Nav />
            <Main />
        </Layout>
    )
}
export default (App);