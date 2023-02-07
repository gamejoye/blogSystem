import { render } from "@testing-library/react";
import React, { useState } from "react";
import './index.scss'

interface IProps {
    children: any
}

interface State {
    error: Error | null;
    errorInfo: React.ErrorInfo | string | null
}

class ErrorBoundary extends React.Component<IProps, State> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            error: null,
            errorInfo: null
        }
    }
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        this.setState({
            error,
            errorInfo
        })
    }
    render(): React.ReactNode {
        if (this.state.error) {
            return (
                <div className="errorBoundary">
                    <h1>Something goes wrong</h1>
                </div>
            )
        }
        return (
            <>
                {this.props.children}
            </>
        )
    }
}
export default ErrorBoundary;