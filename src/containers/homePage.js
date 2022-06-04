import axios from 'axios';
import React from 'react';

const username = getCookie("username");

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            informations:[]
        }
    }
    
    componentDidMount() {
        axios.defaults.withCredentials=true;
        axios.get('http://localhost:8080/MyBlog/blogs/byName',{
            params: {
                username:username,
            }
        }).then(
            (res) => {
                this.setState({
                    informations:res.data
                })
            }
        )
    }

    

    render() {
        const informations = this.state.informations;
        
        const blogs = informations.map((value,i) => {
            return(
                <li key={i}>{value.article_name}</li>
            )
        })
        
        return (
            <div>
                <h1>HomePage</h1>
                <ol>{blogs}</ol>
            </div>
        );
    }
}

function getCookie(cookieName) {
    var strCookie = document.cookie;
    var arrCookie = strCookie.split("; ");
    for(var i = 0; i < arrCookie.length; i++){
        var arr = arrCookie[i].split("=");
        if(cookieName == arr[0]){
            return arr[1];
        }
    }
    return "";
}

export default HomePage;