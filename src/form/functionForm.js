import React from 'react';
class FunctionForm extends React.Component {

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
                <button onClick={()=>this.props.handlerSubmit()}>{this.props.way}</button>
                <p style={{color:'red'}}>{this.props.message}</p>
            </div>
        );
    }
}

export default FunctionForm