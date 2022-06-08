import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Way from './function/way';
import HomePage from './containers/homePage';
import BlogBody from './containers/blogPage';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Routes>
                        <Route path="/login" element={<Way way="login" />} />
                        <Route path="/register" element={<Way way="register" />} />
                        <Route path="/homepage" element={<HomePage />} />
                        <Route path="/blogpage" element={<BlogBody />} />
                    </Routes>
                </div>
            </Router>
            
        )
    }
}
export default App;