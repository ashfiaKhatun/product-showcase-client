// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4N179GOGSnAeoiChnRrBVMJy6fcokNKg",
  authDomain: "e-commerce-df937.firebaseapp.com",
  projectId: "e-commerce-df937",
  storageBucket: "e-commerce-df937.appspot.com",
  messagingSenderId: "86506329048",
  appId: "1:86506329048:web:5126b9e0e8dcf4b54a98ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;