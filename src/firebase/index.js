import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBzq-pJ7qfkhndTu6cLnnmqAiKaLZzGwlk",
  authDomain: "dark-demo-123.firebaseapp.com",
  databaseURL: "https://dark-demo-123.firebaseio.com",
  projectId: "dark-demo-123",
  storageBucket: "dark-demo-123.appspot.com",
  messagingSenderId: "833185456521",
  appId: "1:833185456521:web:2869d82e18250849",
  measurementId: "G-QZTMK1BVC8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//create User Profile Document
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const { firstName, lastName } = additionalData;
    const createdAt = new Date();
    try {
      await userRef.set({ displayName, email, createdAt, firstName, lastName });
    } catch (error) {
      return error;
    }
  }

  return userRef;
};

export const signOutFirebase = async () => {
  return await auth.signOut()
    .then(() => {
      return { success: true }
    })
    .catch(error => {
      return { success: false, error }
    })
}

export const handleonAuthStateChanged = () => {
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        resolve(user);
      } else {
        reject(null);
      }
    });
  });
}