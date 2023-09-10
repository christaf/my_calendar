import React from 'react';
import {useAuth} from '../../contexts/AuthContext';

function Register() {

    const auth = useAuth();

    if (!auth) {
        // Handle the case where auth is null (optional)
        return <div>Loading...</div>;
    }

    const {currentUser} = auth;
    return (
        <div>
            {currentUser ? (
                <p>You are logged in as: {currentUser.email}</p>
            ) : (
                <p>You are not logged in.</p>
            )}
        </div>
    );
}

export default Register;