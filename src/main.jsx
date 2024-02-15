import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import Menu from './Layout/Menu/menu';
import Footer from './Layout/Footer/footer';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Menu />
            <App />
            <Footer />
        </BrowserRouter>
    </React.StrictMode>
);
