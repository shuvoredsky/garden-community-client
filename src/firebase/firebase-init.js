import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBK1oYKhjjAykMw8z3OYXlOUncaIfn9tDQ",
  authDomain: "garden-community-a8c0a.firebaseapp.com",
  projectId: "garden-community-a8c0a",
  storageBucket: "garden-community-a8c0a.firebasestorage.app",
  messagingSenderId: "5172792591",
  appId: "1:5172792591:web:0f451eedae7d7f13c1027a",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
