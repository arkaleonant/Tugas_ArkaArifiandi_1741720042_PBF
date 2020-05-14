import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyATZRKiCdV15Oa0gyMREAnliHqcqRRPJj0",
    authDomain: "uas-pbf-e54e0.firebaseapp.com",
    databaseURL: "https://uas-pbf-e54e0.firebaseio.com",
    projectId: "uas-pbf-e54e0",
    storageBucket: "uas-pbf-e54e0.appspot.com",
    messagingSenderId: "1073079783634",
    appId: "1:1073079783634:web:eb4d9367f7ce878c241d0b",
    measurementId: "G-H5GVML576H"
};


const fire = firebase.initializeApp(config);
export default fire;