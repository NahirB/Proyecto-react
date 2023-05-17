import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPR2aOHr4FlZKfjE21DH43kjC0ScR0qsc",
  authDomain: "react-app-58f5f.firebaseapp.com",
  projectId: "react-app-58f5f",
  storageBucket: "react-app-58f5f.appspot.com",
  messagingSenderId: "59228621227",
  appId: "1:59228621227:web:d6e1ce0bab7255ea85eaee"
};

// Inicializamos la app
const app = firebase.initializeApp(firebaseConfig)

export const getFirestore = () =>{
    return firebase.firestore(app)
}