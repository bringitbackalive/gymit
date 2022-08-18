"use stict";

const User = require("../models/User");
const UsersDB = require("../models/UserDB");


var usersDB = new UsersDB();

function getAllUsers(request, respond){
    usersDB.getAllUsers(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function getUserProfile(request, respond){
    var user =  new User(request.body.username, null, null, null, null, null, null, null);
    usersDB.getUserProfile(user, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}
        
    
function addUser(request, respond){
    var user = new User(request.body.username, request.body.password, request.body.email, request.body.number, request.body.name, request.body.weight, request.body.height, request.body.age);
    usersDB.addUser(user, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });
}

function updateName(request, respond){
    var user = new User(request.body.username, null, null , null, request.body.name, null, null, null);
    usersDB.updateName(user, function (error, result) {
        if (error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    }); 
}

function updatePassword(request, respond){
    var user = new User(request.body.username, request.body.password, null, null, null, null, null, null);
    usersDB.updatePassword(user, function (error, result) {
        if (error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    }); 
}

function updateNumber(request, respond){
    var user = new User(request.body.username, null, null, request.body.number, null, null, null, null);
    usersDB.updateNumber(user, function (error, result) {
        if (error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    }); 
}

function updateEmail(request, respond){
    var user = new User(request.body.username, null, request.body.email, null, null, null, null, null);
    usersDB.updateEmail(user, function (error, result) {
        if (error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    }); 
}

function deleteUser(request, respond){
    var user = new User(request.body.username);
    usersDB.deleteUser(user, function (error, result) {
        if (error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function login(request, respond){
    var username = request.body.username;
    var password = request.body.password; 
    usersDB.login(username, function (error, result) {
        if (error){
            respond.json(error);
        }
        else{
                respond.json(result);
            }
            

        });
}


module.exports = {getAllUsers, getUserProfile, addUser, updateName, updatePassword, updateNumber, updateEmail, deleteUser, login};