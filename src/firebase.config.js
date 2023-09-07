import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDEnuHCtTcnhRZeKDtx7ZKwmGLnMlHMe7s",
    authDomain: "restautrantapp.firebaseapp.com",
    databaseURL: "https://restautrantapp-default-rtdb.firebaseio.com",
    projectId: "restautrantapp",
    storageBucket: "restautrantapp.appspot.com",
    messagingSenderId: "111871365399",
    appId: "1:111871365399:web:2958f303d40b9d66fba752",
    measurementId: "G-59J4B2FX2R"
};


const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)

const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, firestore, storage };