import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
/* import {initializeApp} from 'https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js';
import {getAuth, onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js';
import {collection, getDoc, getDocs, getFirestore} from 'https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyCLFqqCGqwcZjkxVuCXyX5zHyjQ28ugrII",
  authDomain: "personal-website-6141c.firebaseapp.com",
  projectId: "personal-website-6141c",
  storageBucket: "personal-website-6141c.appspot.com",
  messagingSenderId: "1006847355934",
  appId: "1:1006847355934:web:248b8fc0d1b2a9777b520f",
  measurementId: "G-225PBNTVR9"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const todosCol = collection(db,'todos');
const snapshot = await getDocs(todosCol);

// detect auth state change
onAuthStateChanged(auth , user =>{
  if(user = null){
    console.log('logged in!');
  }else{
    console.log('No user');
  }
}); */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App url="https://documentcloud.adobe.com/view-sdk-demo/PDFs/Bodea%20Brochure.pdf" />
  </React.StrictMode>
);
