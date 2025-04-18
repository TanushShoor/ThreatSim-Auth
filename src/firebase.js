import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAE15DeA6KFBbCm0iWaHGy6KFY6t_OtKbI",
    authDomain: "threatsim-559ac.firebaseapp.com",
    projectId: "threatsim-559ac",
    storageBucket: "threatsim-559ac.firebasestorage.app",
    messagingSenderId: "473731366065",
    appId: "1:473731366065:web:2b7802ff26f1b533837690",
    measurementId: "G-W2E2QCR61S"
};
const app= initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth , provider};