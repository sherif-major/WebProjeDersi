import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase projenizin ayarlarını buraya girin
const firebaseConfig = {
    apiKey: "AIzaSyBWjUn8TQLsaS9x6T5HQd1XO-SnLm6GtNc",
    authDomain: "webprojedersi.firebaseapp.com",
    projectId: "webprojedersi",
    storageBucket: "webprojedersi.firebasestorage.app",
    messagingSenderId: "375928903618",
    appId: "1:375928903618:web:cad17e5d5048d4010aa85b",
    measurementId: "G-4C7J2F77VD"
};

// Firebase uygulamasını başlat
const firebaseApp = initializeApp(firebaseConfig);

// Firebase servislerini başlat
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { auth, db };
export default firebaseApp;
