import firebase from "@firebase/app";
import "firebase/auth";


// Your web app's Firebase configuration
var firebaseConfig ={
apiKey: "AIzaSyDrRsHVlUJyS_P3wui9idPEw2j2cberqWE",
authDomain: "labcourse-3a90e.firebaseapp.com",
databaseURL:"https://labcourse-3a90e.firebaseio.com",
projectId: "labcourse-3a90e",
storageBucket: "labcourse-3a90e.appspot.com",
messagingSenderId: "629285431116",
appId: "1:629285431116:web:aebf1600b7c3d4311e91e9"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const googleAuthProvider= new firebase.auth.GoogleAuthProvider();
