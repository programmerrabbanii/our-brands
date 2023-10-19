import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/Firebase.config";

export const AuthContext=createContext(null)
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    const [user,setuser]=useState(null)
    const [loading,setLoading]=useState(true)

    const createUser=(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signUsers=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logout=()=>{
        setLoading(true)
        signOut(auth)
    }

    const signInGoogle=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUsers =>{
            console.log('current value of the current user',currentUsers)
            setuser(currentUsers)
            setLoading(false)
        })
        return()=>{
            unSubscribe()
        }
    },[])

  

    const authInfo={user,
        createUser,
        signUsers,
        logout,
        loading,
        signInGoogle
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;