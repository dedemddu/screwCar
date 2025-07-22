import { createContext, useState, useEffect } from "react";
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/connectfb';

const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const LoginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(() => {
        const desuscribe = onAuthStateChanged(auth, (datauser) => {
            setUser(datauser);
        });
    }, []);

    return <AuthContext.Provider 
                value={{ LoginWithGoogle, user }}>
                {children}
            </AuthContext.Provider>
}

export {
    AuthContext,
    AuthContextProvider
};