import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZw8EYB1xZryxvgDWcSmthaUiI0FLhXOU",
  authDomain: "real-estate-agency-89845.firebaseapp.com",
  projectId: "real-estate-agency-89845",
  storageBucket: "real-estate-agency-89845.appspot.com",
  messagingSenderId: "938433924811",
  appId: "1:938433924811:web:a8a899b3b9786f178d154e",
};

initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);
// export default app
const db = getFirestore();
export default db;
