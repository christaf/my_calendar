// src/AppRouter.tsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App'; // Import your main App component
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route  path="/" element={<App/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
