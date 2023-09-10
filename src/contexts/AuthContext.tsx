import React, { useContext, useEffect, useState } from 'react';
import {db, auth} from '../index';
import User from '../models/User'; // Import your custom User class

type AuthContextType = {
    currentUser: User | null; // Include currentUser in the AuthContextType
};

const AuthContext = React.createContext<AuthContextType | null>(null);

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user && user.email) {
                const customUser = new User(user.uid, user.email, user.displayName || '');
                setCurrentUser(customUser);
            } else {
                setCurrentUser(null);
            }
        });

        return unsubscribe;
    }, []);

    return (
        <AuthContext.Provider value={{ currentUser }}>
            {children}
        </AuthContext.Provider>
    );
}
