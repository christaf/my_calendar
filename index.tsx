
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './src/AppRouter'; // Import your Router component
import { AuthProvider } from './src/contexts/AuthContext';
import { db } from './src/index'; // Import your Firebase initialization

ReactDOM.render(
    <React.StrictMode>
        <AuthProvider>
            <AppRouter />
        </AuthProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
