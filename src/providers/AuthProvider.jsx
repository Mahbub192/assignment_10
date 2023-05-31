/* eslint-disable react/prop-types */
import {
    GithubAuthProvider,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [userProfile, setUseProfile] = useState("");
  const [loader, setLoader] =useState(true)

  const createUserWithGoogle = () => {
    setLoader(true)
    return signInWithPopup(auth, googleProvider);
  };

  const createUserWithGithub = () => {
    setLoader(true)
    return signInWithPopup(auth, githubProvider);
  };

  const createUser = (email, password) => {
    setLoader(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoader(true)
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      console.log("logged in user", loggedUser);

      setUseProfile(loggedUser);
      setLoader(false)
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    auth,
    loader,
    createUser,
    signIn,
    logOut,
    createUserWithGoogle,
    createUserWithGithub,
    userProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
