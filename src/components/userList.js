import React from "react";
class UserList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>---UserList---</h1>
                <ol>{this.props.userList}</ol>
                <button onClick={() => this.props.hanlderIdChangeOnclick()}>change to originalUser</button>
            </div>
        )
    }
}

export default UserList;