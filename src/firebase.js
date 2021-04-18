import firebase from 'firebase';
  
  const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyABFETRica4lcaWo9B0DMRrVzSQ4ejx6jE",
    authDomain: "react-crud-b2773.firebaseapp.com",
    databaseURL: "https://react-crud-b2773-default-rtdb.firebaseio.com",
    projectId: "react-crud-b2773",
    storageBucket: "react-crud-b2773.appspot.com",
    messagingSenderId: "168727997314",
    appId: "1:168727997314:web:2009c14d6919114dbdfd9b"
  });

const db = firebaseApp.firestore();
export default db; 