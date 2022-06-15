import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ErrorBoundary from './ErrorBoundary';
 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ErrorBoundary></ErrorBoundary>);