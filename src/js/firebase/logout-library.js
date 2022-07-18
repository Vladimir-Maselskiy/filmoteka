import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBUOkNmStKTSocLVZep5KOG-DCmcE-JtyU',
  authDomain: 'team-project-filmoteka-4a376.firebaseapp.com',
  projectId: 'team-project-filmoteka-4a376',
  storageBucket: 'team-project-filmoteka-4a376.appspot.com',
  messagingSenderId: '642268048302',
  appId: '1:642268048302:web:153e44a9f24c349d73f63f',
  measurementId: 'G-0YT3H2K0Y7',
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();

const userLogoutLibrary = document.querySelector('#user-logout');

onAuthStateChanged(auth, user => {
  if (user) {
    toggleAuth();
  }
});

function toggleAuth() {
  userLogoutLibrary.classList.toggle('hidden-link');
}

const logout = async () => {
  await signOut(auth);
  toggleAuth();
  //  Notify.info("You have been logged out.");
};

userLogoutLibrary.addEventListener('click', logout);
