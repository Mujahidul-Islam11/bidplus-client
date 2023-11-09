/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext();
const GoogleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const GoogleSignIn = () => {
    return signInWithPopup(auth, GoogleProvider);
  };
  const upProfile = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user.email;
      const loggedUser = { email: userEmail };

      setUser(currentUser);
      setLoading(false);
      if (currentUser) {
        axios
          .post("http://localhost:5000/jwt", loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log("token", res.data);
          });
      } else {
        axios
          .post("http://localhost:5000/userOut", loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log("token", res.data);
          });
      }
    });
    return () => {
      unSubscribe();
    };
  }, [user]);

  const value = {
    user,
    createUser,
    signIn,
    logOut,
    GoogleSignIn,
    upProfile,
    loading,
  };
  return (
    <div>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
