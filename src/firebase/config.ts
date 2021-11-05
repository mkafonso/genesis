/* eslint-disable import/no-duplicates */
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBzp--9vGgg2u0FYLEKs5aDK8Jjr55vv7k',
  authDomain: 'mkafonso-genesis.firebaseapp.com',
  projectId: 'mkafonso-genesis',
  storageBucket: 'mkafonso-genesis.appspot.com',
  messagingSenderId: '639147677537',
  appId: '1:639147677537:web:6714ca3a10fffd89d89720',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const firestore = firebase.firestore();
const auth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { firestore, auth, timestamp };
