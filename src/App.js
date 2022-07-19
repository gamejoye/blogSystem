import React from 'react';
import { connect } from 'react-redux';

import { setUserName } from './redux/actions';

import Main from './components/Main';
import Way from './components/Way';

class App extends React.Component {
    render() {
        const username = this.props.username;
        if(!username) {return <Way action="login" setUserName={this.props.setUserName}></Way>}
        return (
            <div>
                <Main></Main>
            </div>
        )
    }
}
export default connect(
    (state) => {return {username:state.username}},
    {setUserName}
)(App);