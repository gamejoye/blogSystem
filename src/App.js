import React, { useEffect } from 'react';
import Main from './components/Main';
import Nav from './components/Nav';
import { useDispatch, useSelector } from 'react-redux';
import { loadBlogs } from './redux/reducers/blogsReducer';
import { loadUserInfo } from './redux/reducers/userInfoReducer';
import { selectName } from './redux/selectors/userInfoSelector';
import './App.scss';
import 'antd/dist/antd.css';

function App() {
    const name = useSelector(selectName);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetData = async () => {
            await dispatch(loadUserInfo(name)).unwrap();
            await dispatch(loadBlogs(name)).unwrap();
        }
        fetData();
    }, []);
    return (
        <div className='app'>
            <Nav />
            <Main />
        </div>
    )
}
export default App;