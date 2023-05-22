// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpvVzzePTwAyEM6ym-yLOegNGpp0vMUE0",
  authDomain: "playground-ee611.firebaseapp.com",
  projectId: "playground-ee611",
  storageBucket: "playground-ee611.appspot.com",
  messagingSenderId: "512616628001",
  appId: "1:512616628001:web:f952b9bf1181189ee4c860",
  measurementId: "G-1RNY484390"
};

let app

if (firebase.app.lenght===0){
  app=firebase.initializeApp(firebaseConfig);
}else{
  app=firebase.app()
};
// Initialize Firebase
//const analytics = getAnalytics(app);

export const Auth=firebase.auth()
