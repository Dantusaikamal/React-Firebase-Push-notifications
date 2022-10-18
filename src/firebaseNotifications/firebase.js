// Firebase Cloud Messaging Configuration File. 
// Read more at https://firebase.google.com/docs/cloud-messaging/js/client && https://firebase.google.com/docs/cloud-messaging/js/receive

import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

var firebaseConfig = {
  apiKey: "AIzaSyANdEocQtu1U3Yn5o78BBcTfqjO2b50uo8",
  authDomain: "fir-testnotification-17fa0.firebaseapp.com",
  projectId: "fir-testnotification-17fa0",
  storageBucket: "fir-testnotification-17fa0.appspot.com",
  messagingSenderId: "8909773418",
  appId: "1:8909773418:web:8bc51590b15c2781700813",
  measurementId: "G-0PM9QE0V0D"
};

initializeApp(firebaseConfig);

const messaging = getMessaging();

export const requestForToken = () => {
  return getToken(messaging, { vapidKey: `BODjCAfVPelok_HFDAX8dtX08582HGz-VSfzoy5Q6y2co6FWaHn_IT6UPvLR8AhXNG_rhG-XmuGrNZ5LF4F_DNw` })
    .then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        // Perform any other neccessary action with the token
      } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
      }
    })
    .catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });
};

// Handle incoming messages. Called when:
// - a message is received while the app has focus
// - the user clicks on an app notification created by a service worker `messaging.onBackgroundMessage` handler.
export const onMessageListener = () =>
  new Promise((resolve) => {    
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });

  
