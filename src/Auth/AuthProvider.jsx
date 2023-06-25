import { createContext } from "react";


export const authContext=createContext(null);

const AuthProvider = ({children}) => {
    const docs={
        name:"timtim"
    }
    return (
        <authContext.Provider value={docs}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;