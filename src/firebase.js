import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4qobjd4VRSDZjJJamxXDDiNiKKxV9bOI",
  authDomain: "netflix-clone-edaa5.firebaseapp.com",
  projectId: "netflix-clone-edaa5",
  storageBucket: "netflix-clone-edaa5.appspot.com",
  messagingSenderId: "195526337856",
  appId: "1:195526337856:web:74c6aa1b13d5e37c7106a5",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth };
export default db;
