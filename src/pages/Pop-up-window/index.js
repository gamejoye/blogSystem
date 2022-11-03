import React from "react";

class PopUpWindow extends React.Component {
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
       
        return (
            <div id="message">
                <h2>确定要删除本篇博客吗</h2>
                <div id="check">
                    <button onClick={() => help(true)}>确认</button>
                    <button onClick={() => help(false)}>取消</button>
                </div>
            </div>
        )
    }
}