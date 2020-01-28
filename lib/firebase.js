import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth'

const config = { // เปลียนตามของตัวเอง
    apiKey: "AIzaSyC32siB3ghsXD9O_I7ICBihX1U7GeWpXik",
    authDomain: "like-41673.firebaseapp.com",
    databaseURL: "https://like-41673.firebaseio.com",
    projectId: "like-41673",
    storageBucket: "like-41673.appspot.com",
    messagingSenderId: "629373792189",
    appId: "1:629373792189:web:d5a6e558f6e1e275afecd4",
    measurementId: "G-E79958DWLT"
};
if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

export default firebase;