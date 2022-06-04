import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';

class Login extends React.Component {
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
        axios.defaults.withCredentials=true;
        axios.post('http://localhost:8080/MyBlog/function/login',{
            username:state.username,
            password:state.password
        })
        .then(
            //判断是否跳转页面
            (res) => {
                if((res.data == 'success')) {
                    //验证成功，列出该用户的所有博客 
                    window.location.href="/Page1"
                } else {
                    //验证失败，返回验证失败提示信息
                    this.setState({
                        message: 'The user name or password is incorrect. Please enter it again'
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
                <LoginForm 
                        handlerUsernameOnChange={(value)=>{this.handlerUsernameOnChange(value)}}
                        handlerPasswordOnChange={(value)=>{this.handlerPasswordOnChange(value)}}
                        handlerSubmit={()=>this.handlerLogin()}
                        message={this.state.message}
                >
                </LoginForm>
            </div>
        )
    }
}

class LoginForm extends React.Component {

    handlerUsernameOnChange(e) {
        this.props.handlerUsernameOnChange(e.target.value);
    }

    handlerPasswordOnChange(e) {
        this.props.handlerPasswordOnChange(e.target.value);
    }

    render() {
        return(
            <div>
                <input onChange={(e)=>this.handlerUsernameOnChange(e)}></input>
                <input type="password" onChange={(e)=>this.handlerPasswordOnChange(e)}></input>
                <button onClick={()=>this.props.handlerSubmit()}>提交</button>
                <p style={{color:'red'}}>{this.props.message}</p>
            </div>
        );
    }
}



export default Login;