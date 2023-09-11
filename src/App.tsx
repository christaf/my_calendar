import React from 'react';
import './assets/styles/App.css';
import {AuthProvider} from './contexts/AuthContext';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

function App() {
    console.log(Login)
    return (
        <div className="App">
            <h1>Social App</h1>

            <AuthProvider>
                <Login/>
                <Register/>
            </AuthProvider>
        </div>

    );
}

export default App;