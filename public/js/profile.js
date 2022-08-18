var user = "Jack";

function profile() {
    document.getElementById("username").innerHTML = "Username : " + user;

    currentUser = [];
    var request = new XMLHttpRequest();
    request.open('GET', getAllUsers_url, true);

    request.onload = function () {

        allUser_array = JSON.parse(request.responseText);

        for (var i = 0; i < allUser_array.length; i++) {
            if (allUser_array[i].Username === user) {
                currentUser.push(allUser_array[i])
            }
        }
        console.log(currentUser)

        document.getElementById("email").placeholder = currentUser[currentUser.length - 1].Email;
        document.getElementById("number").placeholder = currentUser[currentUser.length - 1].Number;
        document.getElementById("name").placeholder = currentUser[currentUser.length - 1].Name;

    }
    request.send();
}


function changeEmail() {
    var updateEmail = new XMLHttpRequest(); // new HttpRequest instance to send request to server
    updateEmail.open("PUT", email_url, true); //The HTTP method called 'PUT' is used here as we are updating data
    updateEmail.setRequestHeader("Content-Type", "application/json");

    var username = user;
    var email = document.getElementById("email").value;


    var payload = new Object();
    payload.username = username;
    payload.email = email;
    console.log(payload);

    updateEmail.send(JSON.stringify(payload));
    location.reload();
}

function changePass() {
    var updatePassword = new XMLHttpRequest(); // new HttpRequest instance to send request to server
    updatePassword.open("PUT", password_url, true); //The HTTP method called 'PUT' is used here as we are updating data
    updatePassword.setRequestHeader("Content-Type", "application/json");

    var username = user;
    var password = document.getElementById("password").value;

    var payload = new Object();
    payload.username = username;
    payload.password = password;
    console.log(payload);

    updatePassword.send(JSON.stringify(payload));
    location.reload();
}

function changeName() {
    var updateName = new XMLHttpRequest(); // new HttpRequest instance to send request to server
    updateName.open("PUT", name_url, true); //The HTTP method called 'PUT' is used here as we are updating data
    updateName.setRequestHeader("Content-Type", "application/json");

    var username = user;
    var name = document.getElementById("name").value;

    var payload = new Object();
    payload.username = username;
    payload.name = name;
    console.log(payload);

    updateName.send(JSON.stringify(payload));
    location.reload();
    
}

function changeNum() {
    var updateNum = new XMLHttpRequest(); // new HttpRequest instance to send request to server
    updateNum.open("PUT", number_url, true); //The HTTP method called 'PUT' is used here as we are updating data
    updateNum.setRequestHeader("Content-Type", "application/json");

    var username = user;
    var number = document.getElementById("number").value;

    var payload = new Object();
    payload.username = username;
    payload.number = number;
    console.log(payload);

    updateNum.send(JSON.stringify(payload));
    location.reload();
    
}