import  firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyDwir9UYBmw02HWo0cEBXOrjYzVIUULLXA",
  authDomain: "rn-instagram-clone-1ed52.firebaseapp.com",
  projectId: "rn-instagram-clone-1ed52",
  storageBucket: "rn-instagram-clone-1ed52.appspot.com",
  messagingSenderId: "274984532752",
  appId: "1:274984532752:web:f669ee6caf6962a2c34395",
}

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();


const db = firebase.firestore()

export { firebase , db }
