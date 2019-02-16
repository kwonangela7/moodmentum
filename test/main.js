function openSettings() {
    document.getElementById("settings-button").classList.toggle("settings-open");
}

document.getElementById("settings-button").addEventListener('click', openSettings);

var userName;

function saveName() {
    localStorage.setItem('receivedName', userName);
}

var userName = localStorage.getItem('receivedName');

if (userName == null) {
    userName = "friend";
}

function changeName() {
    userName = document.getElementById("name-input").value;
    saveName();
}

document.getElementById("name-form").addEventListener('submit', function(e) {
    e.preventDefault()
    changeName();
});

function getGreeting() {
    document.getElementById("greeting").innerHTML  = `Hello,` + `<br />` + `How are you feeling today?`;
}

getGreeting()

