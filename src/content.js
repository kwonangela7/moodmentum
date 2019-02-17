/* File: content.js
 * ---------------
 * Hello! You'll be making most of your changes
 * in this file. 
 *
 * This file contains javascript code that is executed
 * everytime a webpage loads over HTTP or HTTPS.
 */

 // Initialize Firebase
var config = {
	apiKey: "AIzaSyDm_2ZqqN6Caou8iMtDheOKtbDjUEiZYk0",
	authDomain: "moodmentum.firebaseapp.com",
	databaseURL: "https://moodmentum.firebaseio.com",
	projectId: "moodmentum",
	storageBucket: "moodmentum.appspot.com",
	messagingSenderId: "199158467645"
};
firebase.initializeApp(config);

var db = firebase.database(); // creates a reference to firebase db

console.log("hello");

chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
  console.log(response.farewell);
});

// var username = "angela"
// return db.ref('/users/users' + username).once('value').then(function(snapshot) {
//   var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
//   var usermood = (snapshot.val() && snapshot.val().username.mood) || 'Fine';
// });

document.getElementByID("text").value = new String("hello")







