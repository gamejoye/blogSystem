import axios from 'axios';
import React from 'react';
import FunctionForm from '../form/functionForm';

class Action extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:'',
            message:''
        };
    }
    handlerLogin() {
        const state = this.state;
        const way = this.props.way;
        axios.defaults.withCredentials=true;
        axios.post('http://localhost:8080/MyBlog/function/'+way,{
            username:state.username,
            password:state.password
        })
        .then(
            //判断是否跳转页面
            (res) => {
                if((res.data == 'success')) {
                    if(way == "login") {
                        window.location.href = "/Page1";
                    } else if(way == "register") {
                        window.location.href = "/login";
                    }
                } else {
                    //验证失败，返回验证失败提示信息
                    this.setState({
                        message: way=="login" ? 'The user name or password is incorrect. Please enter it again' : 'The user name already exists. Please register again'
                    })
                }
            }
        )
    }
    handlerUsernameOnChange(value) {
        this.setState({
            username: value
        })
    }

    handlerPasswordOnChange(value) {
        this.setState({
            password: value
        })
    }

    render() {
        return(
            <div>
                <FunctionForm 
                        handlerUsernameOnChange={(value)=>{this.handlerUsernameOnChange(value)}}
                        handlerPasswordOnChange={(value)=>{this.handlerPasswordOnChange(value)}}
                        handlerSubmit={()=>this.handlerLogin()}
                        message={this.state.message}
                        way = {this.props.way}
                >
                </FunctionForm>
            </div>
        )
    }
}

export default Action;