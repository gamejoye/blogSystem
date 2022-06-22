import React from "react";
import { Link } from 'react-router-dom';
import { BlogBar } from "../components/blogBar";

class UserInteface extends React.Component {

    hanlderLiOnclick() {
        document.getElementById("toBlogPage").click()
    }

    render() {
        const blogList = this.props.informations.map((value, i) => {
            return (
                <li key={i} onMouseOver={(e) => { this.props.hanlderLiOnblur(e) }}
                    onClick={() => { this.hanlderLiOnclick() }}
                >{value.article_name}</li>
            )
        })
        return (
            <div>
                <BlogBar
                    hanlderIdChangeOnclick={() => this.props.hanlderIdChangeOnclick()}
                    blogList={blogList}
                    blog={this.props.blog}
                ></BlogBar>
                <Link id='toBlogPage'
                    style={{ display: 'none' }}
                    state={{ blog: this.props.blog }}
                    to={{ pathname: '/blogpage' }}
                ></Link>
            </div>
        )
    }
}

export default UserInteface;