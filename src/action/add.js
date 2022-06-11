import React from 'react';
import BlogForm  from '../form/blogForm';
import { instance } from '../api/axiosConfig2';
const username = getCookie("username");

class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            article_name:'',
            content:'',
            ordered:1000,
            message:''
        };
    }

    componentDidMount() {
        if(username == ""){window.location.href='/login'}
    }

    handlerArticlenameOnChange(value) {
        this.setState({
            article_name:value
        })
    }

    handlerContentOnChange(value) {
        this.setState({
            content:value
        })
    }

    handlerOrderedOnChange(value) {
        this.setState({
            ordered:value
        })
    }

    handlerAdd() {
        const state = this.state;
        //axios请求spring后端进行博客添加
        instance.post('http://localhost:8080/MyBlog/blogs/add',{
            article_name:state.article_name,
            username:username,
            content:state.content,
            ordered:state.ordered
        }) .then(
            (res) => {
                if(res.data==='successfully added') {
                    window.location.href='/homepage'
                } else {
                    this.setState({
                        message:res.data
                    })
                }
            }

        )
    }

    render() {
        return(
            <div>
                <BlogForm 
                    handlerArticlenameOnChange={(value)=>this.handlerArticlenameOnChange(value)}
                    handlerContentOnChange={(value)=>this.handlerContentOnChange(value)}
                    handlerOrderedOnChange={(value)=>this.handlerOrderedOnChange(value)}
                    handlerAdd={()=>this.handlerAdd()}
                    message={this.state.message}
                ></BlogForm>
            </div>
        )
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

export default Add;