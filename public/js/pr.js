
// HERE IS WHERE THE USER USERNAME WILL GET AUTO ASSIGNED TO BE USED FOR ALL THE FUNCTIONS
var user = "Jack"

function userPr() {

    userPro = [];
    var request = new XMLHttpRequest();
    request.open('GET', getAllPr_url, true);

    request.onload = function () {

        pr_array = JSON.parse(request.responseText);

        for (var i = 0; i < pr_array.length; i++) {
            if (pr_array[i].Username === user) {
                userPro.push(pr_array[i])
            }
        }
        console.log(userPro)

        document.getElementById("greeting").innerHTML = "HEY " + user;



        if (userPro[userPro.length - 1].BenchpressTarget - userPro[userPro.length - 1].BenchpressPr > 0) {
            var targetBenchDiff = Math.abs(userPro[userPro.length - 1].BenchpressTarget - userPro[userPro.length - 1].BenchpressPr) + "kg more to go!";

        } else {
            var targetBenchDiff = "Target reached congratulations!"
        }

        if ( userPro[userPro.length - 1].DeadliftTarget - userPro[userPro.length - 1].DeadliftPr > 0) {
            var targetLiftDiff = userPro[userPro.length - 1].DeadliftTarget - userPro[userPro.length - 1].DeadliftPr + "kg more to go!";
        } else {
            var targetLiftDiff = "Target reached congratulations!"
        }

        if (userPro[userPro.length - 1].SquatTarget - userPro[userPro.length - 1].SquatPr > 0) {
            var targetSquatDiff = userPro[userPro.length - 1].SquatTarget - userPro[userPro.length - 1].SquatPr + "kg more to go!";
        } else {
            var targetSquatDiff = "Target reached congratulations!"
        }


     

        document.getElementById("weight").innerHTML = "Current Weight : " + userPro[userPro.length - 1].Weight + " kg";

        document.getElementById("bench").innerHTML = "Current Benchpress PR : " + userPro[userPro.length - 1].BenchpressPr + "kg";
        document.getElementById("target_bench").innerHTML = "Benchpress Target : " + userPro[userPro.length - 1].BenchpressTarget + "kg" + ",   " + targetBenchDiff;

        document.getElementById("deadlift").innerHTML = "Current Deadlift PR : " + userPro[userPro.length - 1].DeadliftPr + "kg";
        document.getElementById("target_deadlift").innerHTML = "Deadlift Target : " + userPro[userPro.length - 1].DeadliftTarget + "kg" + ",   " + targetLiftDiff;

        document.getElementById("squat").innerHTML = "Current Squat PR : " + userPro[userPro.length - 1].SquatPr + "kg"
        document.getElementById("target_squat").innerHTML = "Squat Target : " + userPro[userPro.length - 1].SquatTarget + "kg" + ",   " + targetSquatDiff;
    };

    request.send();
}
//get current
//var test = [{ "yo": 45, "no": 56 }, { "yo": 4, "no": 5 }];
//console.log(test[test.length - 1].no);

//get all only values
//const brands = test.map(({ yo }) => yo);
//console.log(brands);



//CHANGE ALL THE ID TO HTML ONES ARA1@@@@@@@@@@@@@@@!!!!!!!!@2222222222
function addUserPr(){
    var pr = new Object();
    pr.benchpressPr = document.getElementById("bpr").value;// Movie ID is required by server to create new comment 
    pr.deadliftPr = document.getElementById("dpr").value;// Movie title is required by server to create new comment
    pr.squatPr = document.getElementById("spr").value; // Value from HTML input text
    pr.benchpressTPr = document.getElementById("btpr").value;// Movie ID is required by server to create new comment 
    pr.deadliftTPr = document.getElementById("dtpr").value;// Movie title is required by server to create new comment
    pr.squatTPr = document.getElementById("stpr").value; // Value from HTML input text
    pr.weight = document.getElementById("wpr").value; // Value from HTML input text
    pr.height = document.getElementById("hpr").value; // Value from HTML input text
    pr.date_posted = null; // Change the datePosted to null instead of taking the timestamp on the client side;
    pr.username = user;

    console.log(pr)

    var postPr = new XMLHttpRequest(); // new HttpRequest instance to send comment

    postPr.open("POST", addPr_url, true); //Use the HTTP POST method to send data to server

    postPr.setRequestHeader("Content-Type", "application/json");
    
// Convert the data in Comment object to JSON format before sending to the server.
    postPr.send(JSON.stringify(pr)); 
    location.reload();
    
}