import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";


export const authContext=createContext(null);

const AuthProvider = ({children}) => {
    const [loading,setLoading]=useState(true)
    const [user,setUser]=useState(null)
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    const singUp=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const googleLogin=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    const SignIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }
    const updateUserProfile=(photo,name)=>{
        return updateProfile(auth.currentUser,{
            displayName: `${name}`, photoURL: `${photo}`
        })
    }
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,currentUser=>{
            setLoading(false)
            setUser(currentUser)
            console.log("auth updated");
        })
        return ()=>{
            return unsubscribe()
        }
    },[])
    const docs={
        googleLogin,
        singUp,
        loading,
        updateUserProfile,
        logOut,
        SignIn,
        user
    }
    return (
        <authContext.Provider value={docs}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;