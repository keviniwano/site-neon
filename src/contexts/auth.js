import { useState, useEffect, useCallback, createContext } from "react";

export const AuthContext = createContext({});

export default function AuthProvider({ children , ...rest }){
    return(
        <AuthContext.Provider
        value={{
            signed: null,
        }}
        >
        {children}
        </AuthContext.Provider>
    )
}