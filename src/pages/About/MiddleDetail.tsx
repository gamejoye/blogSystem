import { Col, Typography } from "antd";
import React from "react";
import { useNavigate } from "react-router";
import './index.scss'
const { Text, Paragraph } = Typography;
const MiddleDetail = () => {
    const navigation = useNavigate();
    const navigateHome = () => {
        navigation('home')
    }
    return (
        <div
            className="sub-middle-about-container"
        >
            <Typography>
                <Paragraph>
                    你好ovo， 我的名字是<Text mark>gamejoye</Text>
                </Paragraph>
                <Paragraph>
                    你也可以叫我<Text mark>春日野小穹</Text>
                </Paragraph>
                <Paragraph>
                    是一位在校<Text mark>21级本科生</Text>
                </Paragraph>
                <Paragraph>
                    是一个业余<Text mark>oier、 acmer</Text>
                </Paragraph>
                <Paragraph>
                    同时也是一个对<Text mark>前端</Text>和<Text mark>机器学习</Text>很感兴趣的一个人
                </Paragraph>
                <Paragraph>
                    如果你对<Text mark>react</Text>很感兴趣， 又或者你也喜欢<Text mark>机器学习</Text>， 那么我想我们会成为很好的朋友
                </Paragraph>
                <Paragraph>
                    你可以通过<Text keyboard>
                        <span
                            style={{ cursor: 'pointer' }}
                            onClick={navigateHome}
                        >
                            主页
                        </span>
                    </Text>的邮箱
                </Paragraph>
                <Paragraph>
                    或者你可以添加我的个人<Text mark>qq 3032535923</Text>跟我取得联系
                </Paragraph>
                <Paragraph>
                    你可以通过下面的一些平台看到我
                </Paragraph>
                <Paragraph>
                    <ul>
                        <li><a href="https://leetcode.cn/u/gamejoye-lin/">Leetcode</a></li>
                        <li><a href="https://www.luogu.com.cn/user/738166">LuoGu</a></li>
                        <li><a href="https://codeforces.com/profile/gamejoye">Codeforces</a></li>
                        <li><a href="https://github.com/gamejoye">Github</a></li>
                        <li><a href="https://space.bilibili.com/509394339">Bilibili</a></li>
                    </ul>
                </Paragraph>
            </Typography>
        </div>
    )
}
export default MiddleDetail;