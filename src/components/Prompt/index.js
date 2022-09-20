import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { postInstance } from "../../utils/apis/axiosConfig";
import './index.css';
class Prompt extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
    }
    componentDidMount() {
        document.getElementById("prompt-root").appendChild(this.el);
        this.el.id = "prompt";
    };
    componentWillUnmount() {
        document.getElementById("prompt-root").removeChild(this.el);
    }
    render() {
        const help = (type) => {
            document.getElementById("root").style.filter = 'brightness(1)';
            document.getElementById("prompt").style.display = 'none';
            if (!type) return;
            postInstance.post(this.props.url, this.props.data).then(
                (res) => {
                    if (res.data == "succeed") this.props.setCount(this.props.count + 1);
                }
            )
        }
        return createPortal(
            <div id="message">
                <button onClick={() => help(false)}>取消</button>
                <button onClick={() => help(true)}>确认</button>
            </div>,
            this.el
        )
    }
}
export default Prompt;