import React from "react";
import './index.scss'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            errorinfo: null
        }
    }

    componentDidCatch(error, info) {
        this.setState({
            error: error,
            errorinfo: info
        })
    }

    render() {
        if (this.state.error) {
            return (
                <div className="errorBoundary">
                    <h1>Something goes wrong</h1>
                </div>
            )
        }
        return this.props.children;
    }
}
export default ErrorBoundary;