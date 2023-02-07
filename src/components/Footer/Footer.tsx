import React from "react";
import './index.scss'
const MyFooter = () => {
    return (
        <footer className="footer">
            <span>
                个人博客系统
                <a href="https://github.com/gamejoye/blogSystem-React" target={"_blank"}>「源代码」</a>
            </span>
            <span>
                <a href="https://beian.miit.gov.cn/#/Integrated/index" target={"_blank"}>闽ICP备2023000129号-1</a>
            </span>
        </footer>
    )
}
export default MyFooter;