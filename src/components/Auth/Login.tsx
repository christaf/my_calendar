
import React, {useState} from 'react';
import { useAuth } from '../../contexts/AuthContext';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = useAuth();
    if (!auth) {
        return <div>Loading...</div>;
    }
    const { currentUser } = auth;

    const handleLogin = async () => {
        try {
            console.log(auth)
            // await auth.signInWithEmailAndPassword(email, password);
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    return (
        <div>
            {currentUser ? (
                <p>You are logged in as: {currentUser.email}</p>
            ) : (
                <p>You are not logged in.</p>
            )}
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;
