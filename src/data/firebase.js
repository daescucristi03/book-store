import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD7pugBdSfQhalOaPaOBJgyasLFH6zgCmc",
    authDomain: "book-store-2003.firebaseapp.com",
    projectId: "book-store-2003",
    storageBucket: "book-store-2003.appspot.com",
    messagingSenderId: "503289392454",
    appId: "1:503289392454:web:b9a7c9b3a63c88793c4947",
    measurementId: "G-X3REQD8TZY"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };