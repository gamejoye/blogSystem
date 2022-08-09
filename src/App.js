import React, { useEffect, useState } from 'react';
import { getInstance } from './utils/apis/axiosConfig';
import { baseUrl } from './constant';
import { connect } from 'react-redux';
import { setUser } from './redux/actions';

import Main from './components/Main';
import Nav from './components/Nav';
import './App.css'

function App(props) {
    useEffect(() => {
        getInstance.get(
            baseUrl + 'user/settings'
        ).then(
            async (res) => {
                props.setUser(res.data);
            }
        )
    },[1]);
    if( ! props.username) {return <div>Loading...</div>}
    return (
        <div className='app'>
            <Nav />
            <Main />
        </div>
    )
}
export default connect((state) => {
    return ({
        username: state.user
    })
}, { setUser })(App);