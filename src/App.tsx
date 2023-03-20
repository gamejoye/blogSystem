import React, { useEffect } from 'react';
import Main from './components/Main';
import Nav from './components/Nav';
import Footer from './components/Footer/Footer';
import { useSelector } from 'react-redux';
import { loadBlogs, removeAllBlogs } from './redux/reducers/blogsReducer';
import { loadUserInfo } from './redux/reducers/userInfoReducer';
import { selectUserInfo, selectUserInfoStatus } from './redux/selectors/userInfoSelector';
import './App.scss';
import 'antd/dist/reset.css';
import { useAppDispatch } from './redux/store';
import { selectBlogStatus } from './redux/selectors/blogSelector';
import { ConfigProvider, Layout } from 'antd';

function App() {
    const userInfo = useSelector(selectUserInfo);
    const blogStatus = useSelector(selectBlogStatus);
    const userInfoStatus = useSelector(selectUserInfoStatus);
    const dispatch = useAppDispatch();
    const fetUserInfo = async () => {
        await dispatch(loadUserInfo(userInfo.name)).unwrap();
    }
    const fetchBlogs = async () => {
        await dispatch(loadBlogs(userInfo.name)).unwrap();
    }
    if (userInfoStatus === 'idle') {
        fetUserInfo();
    }
    if (blogStatus === 'idle') {
        fetchBlogs();
    }
    if (blogStatus === 'failed') {
        throw new Error('博客获取失败');
    }
    if (userInfoStatus === 'failed') {
        throw new Error('个人信息获取失败');
    }
    useEffect(() => {
        return () => {
            dispatch(removeAllBlogs());
        }
    }, []);
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorTextBase: 'black',
                    colorBgLayout: '#f7f7f7',
                    colorBgContainer: '#ffff',
                    colorFillContent: 'red',
                    borderRadius: 5,
                },
            }}
        >
            <Layout className='app'>
                <Nav />
                <Main />
                <Footer />
            </Layout>
        </ConfigProvider>
    )
}
export default App;