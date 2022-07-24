import React from 'react';
import { getCookie } from './utils/apis/getCookie';

import Main from './components/Main';
import Nav from './components/Nav';
import { Layout } from 'antd';

function App(props) {
    return (
        <Layout>
            <Nav />
            <Main />
        </Layout>
    )
}
export default (App);