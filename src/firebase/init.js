import firebase from 'firebase'
// import firestore from 'firebase/firestore'

var config = {
    apiKey: "AIzaSyC53mDGyY4h97fjbr-s1cAgjWW5X3yLG1w",
    authDomain: "fireapp-c7b43.firebaseapp.com",
    databaseURL: "https://fireapp-c7b43.firebaseio.com",
    projectId: "fireapp-c7b43",
    storageBucket: "fireapp-c7b43.appspot.com",
    messagingSenderId: "360203453479"

};
 const firebaseApp  = firebase.initializeApp(config);
// firebaseApp.firestore().settings({timestampsInSnapshots:true})

 export default firebaseApp.firestore()

