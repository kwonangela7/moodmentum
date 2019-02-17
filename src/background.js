// TODO(DEVELOPER): Change the values below using values from the initialization snippet: Firebase Console > Overview > Add Firebase to your web app.
// Initialize Firebase
var config = {
  apiKey: "AIzaSyDm_2ZqqN6Caou8iMtDheOKtbDjUEiZYk0",
  databaseURL: "https://moodmentum.firebaseio.com",
  storageBucket: "moodmentum.appspot.com"
};
firebase.initializeApp(config);

/**
 * initApp handles setting up the Firebase context and registering
 * callbacks for the auth status.
 *
 * The core initialization is in firebase.App - this is the glue class
 * which stores configuration. We provide an app name here to allow
 * distinguishing multiple app instances.
 *
 * This method also registers a listener with firebase.auth().onAuthStateChanged.
 * This listener is called when the user is signed in or out, and that
 * is where we update the UI.
 *
 * When signed in, we also authenticate to the Firebase Realtime Database.
 */
function initApp() {
  // Listen for auth state changes.
  firebase.auth().onAuthStateChanged(function(user) {
    console.log('User state change detected from the Background script of the Chrome Extension:', user);
  });
	var config = {
		apiKey: "AIzaSyDm_2ZqqN6Caou8iMtDheOKtbDjUEiZYk0",
		authDomain: "moodmentum.firebaseapp.com",
		databaseURL: "https://moodmentum.firebaseio.com",
		projectId: "moodmentum",
		storageBucket: "moodmentum.appspot.com",
		messagingSenderId: "199158467645"
	};
	firebase.initializeApp(config);

	chrome.runtime.onMessage.addListener(
  	function(request, sender, sendResponse) {
    console.log(sender.tab ?
        "from a content script:" + sender.tab.url :
        "from the extension");
    if (request.greeting == "hello")
      sendResponse({farewell: "goodbye"});
  	});
}

window.onload = function() {
  initApp();
};