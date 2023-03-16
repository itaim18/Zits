import React from "react";
import { LoginCard } from "components/basic/loginCard";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { useUserType } from "state/userState";
import firebase from "../../../../firebaseConfig";

export const Signup = () => {
  const userType = useUserType();
  const db = getFirestore(firebase.apps[0]);

  const handleRegister = async ({ user }) => {
    console.log(user);
    if (userType === "volunteer") {
      try {
        const docRef = await addDoc(collection(db, "volunteers"), user);
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    } else if (userType === "survivor") {
      try {
        const docRef = await addDoc(collection(db, "survivors"), user);
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  };
  return <LoginCard handleSubmitForm={handleRegister} />;
};
