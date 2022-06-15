import React from "react";
import App from "./App";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error : null,
            errorinfo : null
        }
    }

    componentDidCatch(error,info) {
        this.setState({
            error : error,
            errorinfo : info
        })
    }

    render() {
        if(this.state.error) {
            return <h1 style={{textAlign:'center'}}>页面发生未知崩溃,请稍后访问</h1>
        }
        return <App></App>
    }
}
export default ErrorBoundary;