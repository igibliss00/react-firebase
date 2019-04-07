import firebase from 'firebase/app';
// database
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "YOUR_KEY",
    authDomain: "net-ninja-marioplan-12c4b.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-12c4b.firebaseio.com",
    projectId: "net-ninja-marioplan-12c4b",
    storageBucket: "net-ninja-marioplan-12c4b.appspot.com",
    messagingSenderId: "683454135782"
};

firebase.initializeApp(config);
firebase.firestore().settings({});

export default firebase;
