import React from 'react';
import './App.css';
import { AuthProvider } from './contexts/AuthContext';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

function App() {
  return (
      <AuthProvider>
        <div className="App">
          <h1>Social App</h1>
          <Login />
          <Register />
        </div>
      </AuthProvider>
  );
}

export default App;