import * as firebase from 'firebase';

const prodConfig = {
  apiKey: "AIzaSyDmBMO1lZxhaQUflhsK0a6-q6-J_JqdHrY",
    authDomain: "test-6aa49.firebaseapp.com",
    databaseURL: "https://test-6aa49.firebaseio.com",
    projectId: "test-6aa49",
    storageBucket: "test-6aa49.appspot.com",
    messagingSenderId: "774515770365"
};

const devConfig = {
  apiKey: "AIzaSyDmBMO1lZxhaQUflhsK0a6-q6-J_JqdHrY",
    authDomain: "test-6aa49.firebaseapp.com",
    databaseURL: "https://test-6aa49.firebaseio.com",
    projectId: "test-6aa49",
    storageBucket: "test-6aa49.appspot.com",
    messagingSenderId: "774515770365"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
