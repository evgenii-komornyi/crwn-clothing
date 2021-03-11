import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyBR62FFTSR1wp5Ld5ZO6l3NTasCL9EP9Ig',
    authDomain: 'crwn-db-3e2f4.firebaseapp.com',
    projectId: 'crwn-db-3e2f4',
    storageBucket: 'crwn-db-3e2f4.appspot.com',
    messagingSenderId: '648808306880',
    appId: '1:648808306880:web:37f7af92d7d631e6fa3525',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
