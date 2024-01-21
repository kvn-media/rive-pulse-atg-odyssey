// src/services/FirebaseService.js
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

const tanksCollection = firestore.collection('tanks');

const FirebaseService = {
  subscribeToTankData: (callback) => {
    const tanksCollection = firestore.collection('tanks');
    
    const unsubscribe = tanksCollection.onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      callback(data);
    });

    return unsubscribe;
  },

  updateTankLevel: (tankId, newLevel) => {
    const tankRef = firestore.collection('tanks').doc(tankId);
    tankRef.update({ level: newLevel });
  },

  // Add other Firestore-related methods as needed
  addUser: async (userData) => {
    try {
      // 'users' is a collection in Firestore
      const usersCollection = firestore.collection('users');
      await usersCollection.add(userData);
    } catch (error) {
      throw new Error('Error adding user to Firestore:', error);
    }
  },

};

export default FirebaseService;
