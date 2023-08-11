import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyDRpK6muEEi8m_GfH1QWVobaODBC3mClQ4",
    authDomain: "imageshopee-e80ee.firebaseapp.com",
    projectId: "imageshopee-e80ee",
    storageBucket: "imageshopee-e80ee.appspot.com",
    messagingSenderId: "713596942057",
    appId: "1:713596942057:web:acd4464ddb253e72622278",
    measurementId: "G-19CFMZN16T"
  };
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)