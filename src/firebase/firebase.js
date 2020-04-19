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

export const addTask = async (task) => {

    const tasks = await db.collection('tasks').add({
        ...task,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    return tasks;
};

export const onSnapshotTasks = async () => {
    return new Promise((resolve, reject) => {
        db.collection('tasks').onSnapshot((snapshot) => {
            const tasksData = [];
            snapshot.forEach( doc => tasksData.push(({ ...doc.data(), id: doc.id })));
            console.log('snapshot => ', tasksData)
            resolve(tasksData); 
        });
    })
}

export const getTasks = async () => {
    // return await db.collection('tasks').onSnapshot((snapshot) => {
    //     const tasksData = [];
    //     snapshot.forEach( doc => tasksData.push(({ ...doc.data(), id: doc.id })));
    // });
    const snapshot = await db.collection('tasks').orderBy("createdAt", "desc").get();
    return snapshot.docs.map(doc => doc.data());
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
