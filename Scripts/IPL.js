var firebaseConfig = {
    apiKey: "AIzaSyDZ3y5PBXtWBuQF-pvOy52jhR4c7hBdIxs",
    authDomain: "sports-web-d72b5.firebaseapp.com",
    databaseURL: "https://sports-web-d72b5-default-rtdb.firebaseio.com",
    projectId: "sports-web-d72b5",
    storageBucket: "sports-web-d72b5.appspot.com",
    messagingSenderId: "396141248538",
    appId: "1:396141248538:web:44dee7cd64d8265cf991a3"
};
firebase.initializeApp(firebaseConfig);

var UserInputsRef = firebase.database().ref('UserInputs')
document.getElementById('testForm').addEventListener('submit', submitForm);
document.getElementById('testForm').addEventListener('submit', call);

function submitForm(e) {
    e.preventDefault();
    var state = document.getElementById('year').value;
    readResults(state);
    console.log("Hi")
}

function readResults(year) {
    var ranks;
    var results = firebase.database().ref(year);
    results.on('value', (data) => {
        ranks = data.val();
        document.getElementById("result1").innerHTML = ranks[1];
        document.getElementById("result2").innerHTML = ranks[2];
        document.getElementById("result3").innerHTML = ranks[3];
        document.getElementById("result4").innerHTML = ranks[4];
        document.getElementById("result5").innerHTML = ranks[5];
    })
}

function call() {
    console.log("Hello");
    document.getElementById("rankings").classList.add("view");
}
