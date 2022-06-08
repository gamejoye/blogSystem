import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

const username = getCookie("username");

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            informations: [],
            blog: {}
        }
    }

    componentDidMount() {
        axios.defaults.withCredentials = true;
        axios.get('http://localhost:8080/MyBlog/blogs/byName', {
            params: {
                username: username,
            }
        }).then(
            (res) => {
                this.setState({
                    informations: res.data
                })
            }
        )
    }


    hanlderLiOnblur(e) {
        const article = e.target.innerHTML;
        for (let i = 0; i < this.state.informations.length; i++) {
            if (article == this.state.informations[i].article_name) {
                console.log(i);
                this.setState({
                    blog: this.state.informations[i]
                })
                break;
            }
        }
    }

    hanlderLiOnclick() {
        document.getElementById("toBlogPage").click()
    }


    render() {
        const informations = this.state.informations;

        const blogList = informations.map((value, i) => {
            return (
                <li key={i} onMouseOver={(e) => { this.hanlderLiOnblur(e) }}
                    onClick={() => { this.hanlderLiOnclick() }}
                >{value.article_name}</li>
            )
        })

        return (
            <div>
                <h1>HomePage</h1>
                <ol>{blogList}</ol>
                <Link id='toBlogPage'
                    style={{display:'none'}}
                    state={{ blog: this.state.blog }}
                    to={{ pathname: '/blogpage' }}
                ></Link>
            </div>
        );
    }
}

function getCookie(cookieName) {
    var strCookie = document.cookie;
    var arrCookie = strCookie.split("; ");
    for (var i = 0; i < arrCookie.length; i++) {
        var arr = arrCookie[i].split("=");
        if (cookieName == arr[0]) {
            return arr[1];
        }
    }
    return "";
}

export default HomePage;