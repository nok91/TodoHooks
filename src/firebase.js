import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/analytics';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: 'AIzaSyCZKOc3peUrrC0M8iQjUibTinlXJIwBCxY',
    authDomain: 'todo-hooks-a5ef1.firebaseapp.com',
    databaseURL: 'https://todo-hooks-a5ef1.firebaseio.com',
    projectId: 'todo-hooks-a5ef1',
    storageBucket: 'todo-hooks-a5ef1.appspot.com',
    messagingSenderId: '939159994724',
    appId: '1:939159994724:web:1e8ef0b413b93087467a71',
    measurementId: 'G-3JY7K9KW1R'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
