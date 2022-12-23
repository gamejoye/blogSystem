import { message } from "antd";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { removeBlog } from "../../../redux/reducers/blogsReducer";
import { handleRemovePrompt } from "../../../utils/actions";
import { postInstance } from "../../../utils/apis/axios/config";
import './index.scss';
function DeleteDialog({url, data}) {
    const [el] = useState(document.createElement('div'));
    const dispatch = useDispatch();
    useEffect(() => {
        document.getElementById("prompt-root").appendChild(el);
        return () => {
            document.getElementById("prompt-root").removeChild(el);
        }
    });
    const help = (type) => {
        handleRemovePrompt(document.getElementById("delete-dialog"));
        if (!type) return;
        postInstance.post(url, data).then(
            (res) => {
                if (res.data == "succeed") {
                    dispatch(removeBlog(data));
                    message.success('删除成功！', 1);
                } else {
                    message.error('发生错误，删除失败', 1);
                }
            }
        )
    }
    return createPortal(
        <div id="delete-dialog">
            <h2>确定要删除本篇博客吗</h2>
            <div id="check">
                <button onClick={() => help(true)}>确认</button>
                <button onClick={() => help(false)}>取消</button>
            </div>
        </div>,
        el
    )
}
export default DeleteDialog;
