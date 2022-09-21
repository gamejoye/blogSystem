import React from 'react';

import Main from './components/Main';
import Nav from './components/Nav';
import Previous from './components/Previous';
import './App.css';
import { setName } from './redux/actions';
import { handleRemovePrompt } from './constant';
import { connect } from 'react-redux';

function App(props) {
    if(!props.name)
        return (
            <Previous/>
        )
    return (
        <div className='app' onClick={handleRemovePrompt}>
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