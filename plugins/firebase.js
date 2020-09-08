import * as firebase from 'firebase/app'
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyBokQM0ZP7bTUpL-ic8seCPI23Mae4Ybwo",
    authDomain: "whatsapp-clone-5d1c9.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-5d1c9.firebaseio.com",
    projectId: "whatsapp-clone-5d1c9",
    storageBucket: "whatsapp-clone-5d1c9.appspot.com",
    messagingSenderId: "195941509853",
    appId: "1:195941509853:web:4fbf162aaf840c6fac0934",
    measurementId: "G-352HR048D1"
  };

  let app = null;
  if(!firebase.app.length) {
      app=firebase.initializeApp(firebaseConfig);
  }
  export default firebase;