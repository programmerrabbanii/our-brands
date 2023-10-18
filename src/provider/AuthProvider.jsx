import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/Firebase.config";

export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {
    const [user,setuser]=useState(null)
    const createUser=(email, password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signUsers=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUsers =>{
            console.log('current value of the current user',currentUsers)
            setuser(currentUsers)
        })
        return()=>{
            unSubscribe()
        }
    },[])

    const authInfo={user,createUser,signUsers}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;