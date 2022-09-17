import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  // apiKey: "AIzaSyC6nANanz-6--MFfhpfijHxTlBdDATUIqU",
  // authDomain: "emailpass-react.firebaseapp.com",
  // projectId: "emailpass-react",
  // storageBucket: "emailpass-react.appspot.com",
  // messagingSenderId: "912907495631",
  // appId: "1:912907495631:web:a42a9623452abb40a0efba",

  apiKey: "AIzaSyCFaBweTpHvNiPvr11QCwDubZ1MM3epAwI",
  authDomain: "milaap-4a12d.firebaseapp.com",
  projectId: "milaap-4a12d",
  storageBucket: "milaap-4a12d.appspot.com",
  messagingSenderId: "937095165131",
  appId: "1:937095165131:web:3103b19539b9ecb9d7174e",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { auth, googleAuthProvider, facebookAuthProvider };
