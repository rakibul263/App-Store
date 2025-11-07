import React from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../Firebase/Firebase.init";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

export default function AuthProvider({ children }) {
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const sendVerify = () => {
    return sendEmailVerification(auth.currentUser);
  };
  const userInfo = {
    createUser,
    sendVerify,
  };
  return <AuthContext value={userInfo}>{children}</AuthContext>;
}
