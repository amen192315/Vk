import React from 'react';
import ReactDOM from 'react-dom/client';
import Routess from './components/routes/Routes.tsx';
import firebase from 'firebase/compat/app';
import { AuthProvider } from './components/providers/AuthProvider.tsx';

firebase.initializeApp({
  apiKey: 'AIzaSyDHn8jQqxikBRjgCuek8YKhUSAWk3axEWc',
  authDomain: 'vk-copy-6b9c4.firebaseapp.com',
  projectId: 'vk-copy-6b9c4',
  storageBucket: 'vk-copy-6b9c4.appspot.com',
  messagingSenderId: '165273655283',
  appId: '1:165273655283:web:50b5ed75acb13079eea486',
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <Routess />
    </AuthProvider>
  </React.StrictMode>
);
