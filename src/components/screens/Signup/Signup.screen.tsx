import React from "react";
import { LoginCard } from "components/basic/loginCard";
import { firebaseConfig } from "../../../../firebaseConfig";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { collection, addDoc } from "firebase/firestore";
import { useUser, useUserType } from "state/userState";
import firebase from "../../../../firebaseConfig";

export const Signup = () => {
  const userType = useUserType();
  const user = useUser();

  const db = getFirestore(firebase.apps[0]);
  console.log(db);

  const handleRegister = async () => {
    if (userType === "volunteer") {
      try {
        const docRef = await addDoc(collection(db, "volunteers"), user);
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  };
  return <LoginCard handleSubmitForm={handleRegister} />;
};
