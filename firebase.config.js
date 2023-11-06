// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBa-ipeEla3K7tajnTn_EjAlXq17Ulw9f4",
  authDomain: "skillswaphub-6e7fd.firebaseapp.com",
  projectId: "skillswaphub-6e7fd",
  storageBucket: "skillswaphub-6e7fd.appspot.com",
  messagingSenderId: "813781359272",
  appId: "1:813781359272:web:56764437263b185a6bc09d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth