import React from 'react';

import Main from './components/Main';
import Nav from './components/Nav';
import './App.css'

function App(props) {
    return (
        <div className='app'>
            <Nav />
            <Main />
        </div>
    )
}
export default (App);