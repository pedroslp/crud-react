import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyDWKoXeGDu9z2ytSGotOpUkl_-4vnEAOOs',
  authDomain: 'crud-react-e2fad.firebaseapp.com',
  projectId: 'crud-react-e2fad',
  storageBucket: 'crud-react-e2fad.appspot.com',
  messagingSenderId: '15335173115',
  appId: '1:15335173115:web:da6cc31c0567e87cd0b95e'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp.database().ref()
