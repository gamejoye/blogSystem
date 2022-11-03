import React, { useEffect } from 'react';

import Main from './components/Main';
import Nav from './components/Nav';
import './App.css';
import { setName } from './redux/actions';
import { connect } from 'react-redux';

function App() {
    return (
        <div className='app'>
            <Nav />
            <Main />
        </div>
    )
}
export default connect(
    (state) => ({
        name: state.name
    }),
    {setName}
)(App);