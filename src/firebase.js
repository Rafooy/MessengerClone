import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp ({
  apiKey: "AIzaSyDJLYVMV6MkxK0_1b2pGAjknujOos7c5m4",
  authDomain: "unichat-2fb18.firebaseapp.com",
  projectId: "unichat-2fb18",
  storageBucket: "unichat-2fb18.appspot.com",
  messagingSenderId: "1035196980540",
  appId: "1:1035196980540:web:c032a66d1e1b8411535239"
}).auth();