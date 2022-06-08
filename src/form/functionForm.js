import React from 'react';
class FunctionForm extends React.Component {

    handlerUsernameOnChange(e) {
        this.props.handlerUsernameOnChange(e.target.value);
    }

    handlerPasswordOnChange(e) {
        this.props.handlerPasswordOnChange(e.target.value);
    }

    render() {
        const action = this.props.way=='login' ? 'register' : 'login';
        const remind = this.props.way=='login' ? '没有用户?' : '已有用户?';
        const url = '/'+action;
        return(
            <div>
                <input onChange={(e)=>this.handlerUsernameOnChange(e)}></input>
                <input type="password" onChange={(e)=>this.handlerPasswordOnChange(e)}></input>
                <button onClick={()=>this.props.handlerSubmit()}>{this.props.way}</button>
                <p style={{color:'red'}}>{this.props.message}</p>
                <p>{remind}<a href={url} style={{textDecoration:'none'}}>{action}</a></p>
            </div>
        );
    }
}

export default FunctionForm