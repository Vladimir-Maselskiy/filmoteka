import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, AuthErrorCodes, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { getDoc, getFirestore, setDoc, updateDoc, addDoc, collection } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBUOkNmStKTSocLVZep5KOG-DCmcE-JtyU",
  authDomain: "team-project-filmoteka-4a376.firebaseapp.com",
//   databaseURL: "https://team-project-filmoteka-4a376.firebaseio.com",
  projectId: "team-project-filmoteka-4a376",
  storageBucket: "team-project-filmoteka-4a376.appspot.com",
  messagingSenderId: "642268048302",
  appId: "1:642268048302:web:153e44a9f24c349d73f63f",
  measurementId: "G-0YT3H2K0Y7"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
const auth = getAuth();

const btnLogin = document.querySelector('#btnLogin'); 
const btnSignup = document.querySelector('#btnSignup'); 
const txtEmail = document.querySelector('#user-email');
const txtPassword = document.querySelector('#user-name');
const modal = document.querySelector('[data-modal]');
const userLogin = document.querySelector('#user-login');
const userLibrary = document.querySelector('#user-library');
const userLogout = document.querySelector('#user-logout');

const loginEmailPassword = async (evt) => {
    evt.preventDefault();

    const loginEmail = txtEmail.value;
    const loginPassword = txtPassword.value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            .then(data => {
                if (data) {
                    modal.classList.toggle('is-hidden');
                    txtEmail.value = '';
                    txtPassword.value = '';
                }
            })
    }
    catch (error) {
        showLoginError(error);
    }
}

btnLogin.addEventListener('click', loginEmailPassword)

const createAccount = async(evt) => {
    evt.preventDefault();

    const loginEmail = txtEmail.value;
    const loginPassword = txtPassword.value;

    try {
        await createUserWithEmailAndPassword(auth, loginEmail, loginPassword)
            .then(async userCredential => {
                    modal.classList.toggle('is-hidden');
                // try {
                //     const docRef = await addDoc(collection(firestore, 'users'), {
                //         email: loginEmail,
                //         password: loginPassword,
                //         queuefilms: [],
                //         watchedfilms: [],
                //     })
                //     console.log(docRef);
                // }
                // catch(e) {console.log(e)}
            })
    }
    catch (error) {
        if (loginPassword.length < 7) {
            Notify.info('Your password have less than 6 characters');
        } else {
            showLoginError(error);
        }
    }
}

btnSignup.addEventListener('click', createAccount);

const showLoginError = (error) => {

    if (error.code == AuthErrorCodes.INVALID_PASSWORD) {
        Notify.info('Wrong password. Try again');
    } else {
        Notify.info(`Error: ${error.message}`);
    }
}
    
// Detect auth state

    onAuthStateChanged(auth, user => {
    if (user) {
        toggleAuth();
    }
}) 

const logout = async () => {
    await signOut(auth);
    toggleAuth();
}

userLogout.addEventListener('click', logout);

function toggleAuth() {
    userLogin.classList.toggle('hidden-link');
    userLibrary.classList.toggle('hidden-link');
    userLogout.classList.toggle('hidden-link');
}

// ----------------Firestore-----------------

// const specialOfTheDay = doc(firestore, 'dailySpecial/2021-09-14'); // path to your document

// function writeDailySpecial() {
//     const docData = {
//         description: 'A delicious vanilla latte',
//         price: 3.99, 
//         milk: 'Whole',
//         // queuefilms: [],
//         // watchedfilms: [],
//     }
//     // setDoc(specialOfTheDay, docData); - it will completely replace any document that already exists
//     // setDoc(specialOfTheDay, docData, { merge: true});
//     try {
//         await updateDoc(specialOfTheDay, docData); // - overwrite the fields that you specify and keep old data 
//         console.log('add to the database')
//     } catch (error) {
//         console.log(`${error}`)
//         }
// }

// async function readSingleDocument() {
//     const mySnapshot = await getDoc(specialOfTheDay);
//     if (mySnapshot.exists()) {
//         const docData = mySnapshot.data();
//         console.log(`My data is ${JSON.stringify(docData)}`);
//     }
// }

// writeDailySpecial();
// readSingleDocument();