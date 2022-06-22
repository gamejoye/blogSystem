import React from "react";
class BlogBar extends React.Component {

    hanlderLogoutOnclick() {
        document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "isAd=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        window.location.href = '/login'
    }

    hanlderButtonOnclick() {
        window.location.href = '/addpage';
    }
    
    render() {
        return (
            <div>
                <h1>HomePage</h1>
                <button onClick={() => this.hanlderLogoutOnclick()}>logout</button>
                <button onClick={() => this.props.hanlderIdChangeOnclick()}>change to rootUser</button>
                <ol>{this.props.blogList}</ol>
                <button onClick={() => this.hanlderButtonOnclick()}>Add a blog</button>
            </div>
        )
    }
}
export {BlogBar};