
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyCx6lIbLS9iYoxau78aK9MxIxFnaEh9KBI",
  authDomain: "tik-tok---jornada-230b7.firebaseapp.com",
  projectId: "tik-tok---jornada-230b7",
  storageBucket: "tik-tok---jornada-230b7.appspot.com",
  messagingSenderId: "843981272557",
  appId: "1:843981272557:web:b9be482e8ed1424d7ea3e4"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;