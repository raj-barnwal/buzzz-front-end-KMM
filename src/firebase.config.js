import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: "AIzaSyAisc75Hm77cBYuj0_MzFO_ZTCwK3HxGko",
  authDomain: "buzzz-dev.firebaseapp.com",
  projectId: "buzzz-dev",
  storageBucket: "buzzz-dev.appspot.com",
  messagingSenderId: "80791830120",
  appId: "1:80791830120:web:a3009bbaa3aea6ef5185dd",
  measurementId: "G-DSMJPXF654"
};


const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
