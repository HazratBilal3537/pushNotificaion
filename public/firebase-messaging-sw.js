// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
 
    apiKey: "AIzaSyBz7iRQGQqxDUK0HbtTAoJ2innTIryH0kg",
    authDomain: "devicetoken-98c02.firebaseapp.com",
    projectId: "devicetoken-98c02",
    storageBucket: "devicetoken-98c02.appspot.com",
    messagingSenderId: "1078868349099",
    appId: "1:1078868349099:web:144fa716a86a26c93627ee",
    measurementId: "G-38E6BDQTWN"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log(
      '[firebase-messaging-sw.js] Received background message ',
      payload
    );
    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
      icon: '/firebase-logo.png'
    };
  
    self.registration.showNotification(notificationTitle, notificationOptions);
  });