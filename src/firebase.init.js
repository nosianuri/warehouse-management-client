// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmak3LBQQyhScITrgDPIrAOeSSk1r2euY",
  authDomain: "warehouse-management-cli-82fff.firebaseapp.com",
  projectId: "warehouse-management-cli-82fff",
  storageBucket: "warehouse-management-cli-82fff.appspot.com",
  messagingSenderId: "1050052440447",
  appId: "1:1050052440447:web:8aacfdb680ebb98e23ea4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;