import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "./firebase.config";
import { createContext, useEffect, useState } from "react";
import axios from "axios";


export const AuthContext=createContext(null)
const auth=getAuth(app)

const googleProvider = new GoogleAuthProvider()
const gitHubProvider = new GithubAuthProvider()
const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

    // create user

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

     // sign in
     const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    };

     //   google
     const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };
    //   github
    const gitHubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, gitHubProvider);
    };

    const logOut = async() => {
        setLoading(true)
        const {data}=await axios(`${import.meta.env.VITE_APP_URL}/logout`,{withCredentials:true})
        console.log(data);
        return signOut(auth)
    }
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
      }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false);
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const authInfo={
        user,
        setUser,
        loading,
        createUser,
        signIn,
        googleLogin,
        gitHubLogin,
        logOut,
        updateUserProfile
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
            
        </div>
    );
};

export default AuthProvider;