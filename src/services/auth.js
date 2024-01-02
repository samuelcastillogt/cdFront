import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, setPersistence, browserSessionPersistence } from "firebase/auth";
import {store} from "../redux/store"
import { DELETE_USER_DATA, SET_USER_DATA } from "../redux/slices/user.slice";
const provider = new GoogleAuthProvider();
const firebaseConfig = {
    apiKey: "AIzaSyBTlIW_1NAeMeSDOdCc4AICtGxoYbaUyuw",
    authDomain: "directorio-bc73c.firebaseapp.com",
    databaseURL: "https://directorio-bc73c.firebaseio.com",
    projectId: "directorio-bc73c",
    storageBucket: "directorio-bc73c.appspot.com",
    messagingSenderId: "584037980083",
    appId: "1:584037980083:web:3d1a9f630024b3c3565dc6",
    measurementId: "G-PL8N063SXF"
  };
  
  const app = initializeApp(firebaseConfig);
  
  const auth = getAuth(app);
  export const checkSesionUser = ()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const uid = user.uid;
          store.dispatch(SET_USER_DATA(user))
        }
      })
  }
  export const login = ()=>{
    setPersistence(auth, browserSessionPersistence)
  .then(() => {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    return  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
  
      const user = result.user;
      store.dispatch(SET_USER_DATA(user))
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
  });
   
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  }
  export const logOut = ()=>{
    const auth = getAuth();
signOut(auth).then(() => {
    store.dispatch(DELETE_USER_DATA())
}).catch((error) => {
  // An error happened.
});
  }