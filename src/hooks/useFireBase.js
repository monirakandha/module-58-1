import {useEffect, useState } from "react"
import app from '../firebase.init'
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const useFireBase = () => {
    const [user , setUser] = useState({});

    const signInWithGoogle = () => {
       signInWithPopup(auth , googleProvider) 
       .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
    }

    const handleSignOut = ()  => {
        signOut(auth)
        .then( () => {})
    }



    useEffect(() => {
        onAuthStateChanged(auth , user => {
            setUser(user);

        })
    } , [])
    return { user , handleSignOut ,  signInWithGoogle }
} 

export default useFireBase;