function loginMe(){
    
    var username = document.getElementById("usernameLogin").value;
    console.log(username);
    var password = document.getElementById("passwordLogin").value;
    console.log(password);
    //var payload = {"username":username, "password":password}
    
    if (username == '' || password == ''){
        alert("Please enter your credentials");
        window.location.reload();
    }else{
        var loginUser = new XMLHttpRequest();

        loginUser.open('POST', login_url, true);
        loginUser.setRequestHeader("Content-type", "application/json");

        loginUser.onload = function () {
                    
            var token = JSON.parse(loginUser.responseText); 
            console.log(token.result);
            
            if (token.result != "invalid"){
                document.location.href = "dashboard.html";
                alert("Login Success");
            } else{
                alert("Wrong password");
            }
            
            
        };

    
        
        
            var payload = new Object();
            payload.username = username;
            payload.password = password;
            console.log(payload);
         

        loginUser.send(JSON.stringify(payload));
}
}

