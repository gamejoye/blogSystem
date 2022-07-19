import React, { Suspense } from "react";
import { Route, Routes} from "react-router-dom";

import Home from '../../pages/Home';

class Main extends React.Component {
    render() {
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <div>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                    </Routes>
                </div>
            </Suspense>
        )
    }
}

export default Main;