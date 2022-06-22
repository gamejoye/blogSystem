import React from 'react';
import { instance } from '../api/axiosConfig';
import UserList from '../components/userList';
import UserInteface from './userInterface';

const username = getCookie("username");
const isAD = getCookie("isAd");

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            informations: [],//博客s
            users: [],//用户s
            blog: {},
            isAD: isAD
        }
    }

    componentDidMount() {

        //从数据库获取登陆用户博客
        instance.get('http://localhost:8080/MyBlog/blogs/byName', {
            params: {
                username: username,
            }
        }).then(
            (res) => {
                if (res.data == "not login") { window.location.href = '/login' }
                this.setState({
                    informations: res.data
                })
            }
        )

        //从数据库获取管理员所管理的普通用户信息
        if (isAD > 0) {
            instance.get('http://localhost:8080/MyBlog/users/level', {
                params: {
                    level: isAD,
                }
            }).then(
                (res) => {
                    this.setState({
                        users: res.data
                    })
                }
            )
        }
    }

    hanlderLiOnblur(e) {
        const article = e.target.innerHTML;
        for (let i = 0; i < this.state.informations.length; i++) {
            if (article == this.state.informations[i].article_name) {
                this.setState({
                    blog: this.state.informations[i]
                })
                break;
            }
        }
    }

    hanlderIdChangeOnclick() {
        this.setState(state => ({
            isAD : state.isAD==0 ? isAD : 0
        }))
    }


    render() {
        const users = this.state.users;
        const isAD = this.state.isAD;


        const userList = users.map((user,i) => {
            return (
                <li key={i} 
                >{user.name}</li>
            )
        })


        if(isAD==0) {
            return (
                <UserList
                    userList = {userList}
                    hanlderIdChangeOnclick = {() => {this.hanlderIdChangeOnclick()}}
                ></UserList>
            )
        }

        return (
            <UserInteface
                hanlderIdChangeOnclick = {() => this.hanlderIdChangeOnclick()}
                hanlderLiOnblur = {(e) => this.hanlderLiOnblur(e)}
                informations = {this.state.informations}
                blog = {this.state.blog}
            ></UserInteface>
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

export default HomePage;