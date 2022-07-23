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
            return <h1 style={{textAlign:'center'}}>Something went wrong.</h1>
        }
        return <App></App>
    }
}
export default ErrorBoundary;