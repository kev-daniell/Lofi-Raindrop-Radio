// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfyPFZOk4xyF_Yk4crqMbnRYAELKMqLNM",
  authDomain: "lofi-raindrop-radio.firebaseapp.com",
  projectId: "lofi-raindrop-radio",
  storageBucket: "lofi-raindrop-radio.appspot.com",
  messagingSenderId: "206599247778",
  appId: "1:206599247778:web:b0659fc177ddb19e7144fb",
  measurementId: "G-JCGZJREGGS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage();

export default storage;
