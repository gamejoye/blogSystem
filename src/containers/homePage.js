import React from 'react';
import { Link } from 'react-router-dom';
import { instance } from '../api/axiosConfig';

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
        instance.get('http://localhost:8080/MyBlog/blogs/byName', {
            params: {
                username: username,
            }
        }).then(
            (res) => {
                if(res.data == "not login") {window.location.href='/login'}
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
                //console.log(i);
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

    hanlderButtonOnclick() {
        window.location.href='/addpage';
    }

    hanlderLogoutOnclick() {
        document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        window.location.href='/login'
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
                <button onClick={()=>this.hanlderLogoutOnclick()}>logout</button>
                <ol>{blogList}</ol>
                <Link id='toBlogPage'
                    style={{display:'none'}}
                    state={{ blog: this.state.blog }}
                    to={{ pathname: '/blogpage' }}
                ></Link>
                <button onClick={()=>this.hanlderButtonOnclick()}>Add a blog</button>
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