// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // Add this import for Firebase Storage

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDFNI-1q9CLhP9RnVqCl2OFFaeoDUvuK4o",
    authDomain: "integratedadmissionsyste-f9536.firebaseapp.com",
    projectId: "integratedadmissionsyste-f9536",
    storageBucket: "integratedadmissionsyste-f9536.appspot.com",
    messagingSenderId: "857135218660",
    appId: "1:857135218660:web:00d5ba6b2fb3c5a77d91f1"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)
const storage = getStorage(app)


export {auth}
export { db }
export{storage}