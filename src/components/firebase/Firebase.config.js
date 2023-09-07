import { getApp, getApps, initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDRdii2_S4fbjnDGhcUJisZr_3kKsUR8bI",
  authDomain: "restautrantjsx.firebaseapp.com",
  projectId: "restautrantjsx",
  storageBucket: "restautrantjsx.appspot.com",
  messagingSenderId: "884043504519",
  appId: "1:884043504519:web:a36aa73b50622f6b891122",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const storage = getStorage(app);


export {app, storage}


