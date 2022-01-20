import  firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyBolPethJiY7k9OzEKbiCrjL4cmUxNYGD0",
  authDomain: "instagramclone-8e608.firebaseapp.com",
  projectId: "instagramclone-8e608",
  storageBucket: "instagramclone-8e608.appspot.com",
  messagingSenderId: "48185006347",
  appId: "1:48185006347:web:801a46bd3b3beb3a886a0e"
}

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();


const db = firebase.firestore()

export { firebase , db }
