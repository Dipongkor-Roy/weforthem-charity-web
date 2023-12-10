import { createContext,useEffect,useState } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import app from '../Firebase/firebase.config';

export const AuthContext=createContext();
const auth=getAuth(app);

const UseContext = () => {
    const [user,setUser]=useState('');
    const [loading,setLoading]=useState(true);

    const logInViaEmail=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const logOut=()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false)
        })
        return ()=> unSubscribe();
    },[])
    const authInfo={user,loading,createUser,logInViaEmail,logOut}

   return (
    <div><AuthContext.Provider value={authInfo}>children</AuthContext.Provider></div>
   )
};

export default UseContext;