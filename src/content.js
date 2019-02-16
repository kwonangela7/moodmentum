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

var db = firebase.database();
