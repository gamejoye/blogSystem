import React from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundary from './ErrorBoundary';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';
 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<Provider store={store}>
    <BrowserRouter>
        <ErrorBoundary/>
    </BrowserRouter>
</Provider>
);