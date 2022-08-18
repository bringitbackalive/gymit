var user = "Jack";

function getProgress() {
    userProgression = [];
    var request = new XMLHttpRequest();
    request.open('GET', getUserProgress_url, true);

    request.onload = function () {

        userProgress_array = JSON.parse(request.responseText);
        
        for (var i = 0; i < userProgress_array.length; i++) {
            if (userProgress_array[i].Username === user) {
                userProgression.push(userProgress_array[i])
            }
        }
       console.log(userProgression)
    }
    request.send();
}



function addProgress() {
    var progress = new Object();
    progress.benchpress = document.getElementById("bpro").value;// Movie ID is required by server to create new comment 
    progress.deadlift = document.getElementById("dpro").value;// Movie title is required by server to create new comment
    progress.squat = document.getElementById("spro").value; // Value from HTML input text
    progress.weight = document.getElementById("wpro").value; // Value from HTML input text
    progress.date_posted = null; // Change the datePosted to null instead of taking the timestamp on the client side;
    progress.username = user;

    var postProgress = new XMLHttpRequest(); // new HttpRequest instance to send comment

    postProgress.open("POST", addProgress_url, true); //Use the HTTP POST method to send data to server

    postProgress.setRequestHeader("Content-Type", "application/json");
    
// Convert the data in Comment object to JSON format before sending to the server.
    postProgress.send(JSON.stringify(progress)); 
    location.reload();
}