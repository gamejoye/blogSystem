import React from "react";
import { connect } from "react-redux";

import Titles from "../Titles";


class Home extends React.Component {
    render() {
        const username = this.props.username;
        if(username === "") {
            //
            return <div>Home </div>
        }
        return <Titles username={username}></Titles>
    }
}

export default connect(
    (state) => {return {username:state.username}}
)(Home);