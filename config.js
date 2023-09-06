import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAeeCdEczhdCBlT_2d70awFRN3Fx7GObbY",
  authDomain: "voting-6efe9.firebaseapp.com",
  databaseURL: "https://voting-6efe9-default-rtdb.firebaseio.com",
  projectId: "voting-6efe9",
  storageBucket: "voting-6efe9.appspot.com",
  messagingSenderId: "492314288836",
  appId: "1:492314288836:web:c5c9784444e3c2cce61f91"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();