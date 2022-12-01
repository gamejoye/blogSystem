import React, { useEffect } from 'react';
import Main from './components/Main';
import Nav from './components/Nav';
import { loadBlogs, loadUserInfo } from './utils/apis/axios/actions';
import { useDispatch, useSelector } from 'react-redux';
import { setAllBlogs } from './redux/reducers/blogsReducer';
import { selectName } from './redux/selectors';
import './App.css';
import { setUserInfo } from './redux/reducers/userInfoReducer';

function App() {
    const name = useSelector(selectName);
    const dispatch = useDispatch();
    useEffect(() => {
        loadUserInfo(name, dispatch, setUserInfo);
        loadBlogs(name, dispatch, setAllBlogs);
    }, [name]);
    return (
        <div className='app'>
            <Nav />
            <Main />
        </div>
    )
}
export default App;