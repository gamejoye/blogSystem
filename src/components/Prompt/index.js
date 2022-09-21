import React from "react";
import { createPortal } from "react-dom";
import { handleRemovePrompt } from "../../constant";
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
            handleRemovePrompt();
            if (!type) return;
            postInstance.post(this.props.url, this.props.data).then(
                (res) => {
                    if (res.data == "succeed") this.props.setCount(this.props.count + 1);
                }
            )
        }
        return createPortal(
            <div id="message">
                <h2>确定要删除本篇博客吗</h2>
                <div id="check">
                    <button onClick={() => help(true)}>确认</button>
                    <button onClick={() => help(false)}>取消</button>
                </div>
            </div>,
            this.el
        )
    }
}
export default Prompt;