// firebase.js
// contains the Firebase context and provider

import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/analytics';
import 'firebase/auth';

import firebaseConfig from './firebaseConfig';

firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebase.firestore();

export const addTask = (task) => {
    return db.collection('tasks').add({
        ...task
    });
};

export const getTasks = async () => {
    // .where('userId', '==', 'ujUrOjDcV16F')
    return await db.collection('tasks').get();
};

export const updateTask = (taskId) => {
    return db.collection('tasks').doc(taskId).update({
        completed: true
    });
};

export const authenticateAnonymously = () => {
    return firebase.auth().signInAnonymously();
};

export const getGroceryList = (groceryListId) => {
    return db.collection('groceryLists').doc(groceryListId).get();
};

export const addUserToGroceryList = (userName, groceryListId, userId) => {
    return db
        .collection('groceryLists')
        .doc(groceryListId)
        .update({
            users: firebase.firestore.FieldValue.arrayUnion({
                userId: userId,
                name: userName
            })
        });
};
