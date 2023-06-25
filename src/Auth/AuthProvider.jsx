import { createContext } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../Firebase/firebase.config";


export const authContext=createContext(null);

const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    const googleLogin=()=>{
        return signInWithPopup(auth,googleProvider)
    }
    const docs={
        googleLogin
    }
    return (
        <authContext.Provider value={docs}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;