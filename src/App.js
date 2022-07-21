import React from 'react';
import { getCookie } from './utils/apis/getCookie';


import Main from './components/Main';
import Way from './components/Way';

class App extends React.Component {
    render() {
        const username = getCookie("username");
        
        if(!username) {return <Way action="login"></Way>}
        return (
            <div>
                <Main></Main>
            </div>
        )
    }
}
export default(App);