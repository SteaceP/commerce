import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDL5V874Ju9PTRWJ8hMuerVnbjYpe0KRwI",
  authDomain: "react-firebase-blog-fa4c7.firebaseapp.com",
  projectId: "react-firebase-blog-fa4c7",
  storageBucket: "react-firebase-blog-fa4c7.appspot.com",
  messagingSenderId: "487295841277",
  appId: "1:487295841277:web:d6b946f2147453a8cd9f94",
  measurementId: "G-RVLWYQBYL8",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
