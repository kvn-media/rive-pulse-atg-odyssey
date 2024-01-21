// src/services/FirebaseService.js
import firebase from 'firebase/app';
import 'firebase/firestore';
import { useCallback } from 'react';

const firebaseConfig = {

};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const subscribeToTankData = (callback) => {
    return db.collection('tankData').onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      callback(data);
    });
};

export const FirebaseService = {
    subscribeToTankData,
}