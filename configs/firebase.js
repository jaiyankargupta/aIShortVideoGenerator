import { initializeApp } from "firebase/app";

import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: `{process.env.NEXT_PUBLIC_FIREBASE_API_KEY}`,
  authDomain: `{process.env.FIREBASE_PROJECT_ID}.firebaseapp.com`,
  projectId: `{process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}`,
  storageBucket: `{process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.firebasestorage.app`,
  messagingSenderId: `{process.env.NEXT_PUBLIC_FIREBASE_PROJECT_NUMBER}`,
  appId: `{process.env.NEXT_PUBLIC_FIREBASE_APP_ID}`,
  measurementId: "G-6X7SPFLXN2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
