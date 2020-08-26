window.onload = () => {
  var firebaseConfig = {
    apiKey: "AIzaSyAFNJeIog7ZvEis06fTzgX4RAT9ZZ2styQ",
    authDomain: "chat-app-91908.firebaseapp.com",
    databaseURL: "https://chat-app-91908.firebaseio.com",
    projectId: "chat-app-91908",
    storageBucket: "chat-app-91908.appspot.com",
    messagingSenderId: "948706229473",
    appId: "1:948706229473:web:fc989c74d679c486408ba0",
  };
  firebase.initializeApp(firebaseConfig);
  
  console.log(firebase.app())
  firebase.auth().onAuthStateChanged((user) => {
    if(user) {
      model.currentUser = {
        displayName: user.displayName,
        email: user.email
      }
      if(user.emailVerified) {
        view.setActiveScreen('chatPage')
      } else {
        alert('Please verify your email')
        firebase.auth().signOut()
        view.setActiveScreen('loginPage')
      }
    } else {
      view.setActiveScreen('registerPage')
    }
  })
}