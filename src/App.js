import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './function/login';
import HomePage from './containers/homePage';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Routes>
                        <Route path="/" element={<Login/>} />
                        <Route path="/Page1" element={<HomePage/>} />
                    </Routes>
                </div>
            </Router>
        )
    }
}
export default App;