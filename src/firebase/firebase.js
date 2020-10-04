import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyCO7q4Pf4nD-f01jJOCxCGaxmp1MtXyGh8',
  authDomain: 'studeevn.firebaseapp.com',
  databaseURL: 'https://studeevn.firebaseio.com',
  projectId: 'studeevn',
  storageBucket: 'studeevn.appspot.com',
  messagingSenderId: '968422630768',
  appId: '1:968422630768:web:74af148f7264a671f4dbb5',
  measurementId: 'G-PXKJWV4S60',
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const analytics = firebase.analytics();
const auth = firebase.auth();
const firestore = firebase.firestore();

export { storage, analytics, auth, firestore };
