import React, { createContext, useEffect, useState } from 'react';
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const UserAuth = createContext(null)

const auth = getAuth(app);
const Auth = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    const facebookIn = () => {
        setLoading(true)
        return signInWithPopup(auth, facebookProvider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const updateInfo = (loggedUser, name, photo) => {
        setLoading(true)
        return updateProfile(loggedUser, name, photo);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
        })
        return () => unsubscribe()
    }, [])


    const authInfo = {
        user,
        signIn,
        signUp,
        updateInfo,
        googleIn,
        facebookIn,
        loading,
        logOut
    }

    return (
        <UserAuth.Provider value={authInfo}>
            {children}
        </UserAuth.Provider>
    )
};

export default Auth;