import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyB2E4FMeg3uXjxbP4xgxF1ynmVzfY0kjZ0",
    authDomain: "message-app-6ece8.firebaseapp.com",
    databaseURL: "https://message-app-6ece8.firebaseio.com",
    projectId: "message-app-6ece8",
    storageBucket: "message-app-6ece8.appspot.com",
    messagingSenderId: "683681913801",
    appId: "1:683681913801:web:1ab8dd68d10fe3e12c6618",
    measurementId: "G-ZNFVR9YZMK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth()
  export const db = firebase.firestore()
