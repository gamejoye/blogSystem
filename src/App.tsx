import React, { useEffect } from 'react';
import Main from './components/Main';
import Nav from './components/Nav';
import Footer from './components/Footer/Footer';
import { useSelector } from 'react-redux';
import { loadBlogs, removeAllBlogs } from './redux/reducers/blogsReducer';
import { loadUserInfo } from './redux/reducers/userInfoReducer';
import { selectName } from './redux/selectors/userInfoSelector';
import './App.scss';
import 'antd/dist/antd.css';
import { useNavigate } from 'react-router';
import { useAppDispatch } from './redux/store';

function App() {
    const name = useSelector(selectName);
    const dispatch = useAppDispatch();
    const navigation = useNavigate();
    useEffect(() => {
        if (name === '') {
            navigation('/');
        } else {
            const fetData = async () => {
                await dispatch(loadUserInfo(name)).unwrap();
                await dispatch(loadBlogs(name)).unwrap();
            }
            fetData();
        }
        return () => {
            dispatch(removeAllBlogs());
        }
    }, [name]);
    return (
        <div className='app'>
            <Nav />
            <Main />
            <Footer />
        </div>
    )
}
export default App;