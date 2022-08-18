"use strict";

var db = require('../db_connections');
class UsersDB {
    
getAllUsers(callback) {
    var sql = "SELECT * FROM gymit.user;";
    db.query(sql, callback);
    
}

getUserProfile(user, callback) {
    var sql = "SELECT * FROM gymit.user WHERE username = ?";
    db.query(sql, [user.getUsername()], callback);
}

addUser(user, callback) {
    var sql = "INSERT INTO gymit.user (username, password, email, number, name, weight, height, age) VALUES (?, ?, ?, ?, ?, ? ,?, ?)";
    db.query(sql, [user.getUsername(), user.getPassword(), user.getEmail(), user.getNumber(), user.getName(), user.getWeight(), user.getHeight(), user.getAge()], callback);
}

updateName(user, callback) {
    var sql = "UPDATE gymit.user SET name = ? WHERE username = ?";
    return db.query(sql, [user.getName(), user.getUsername()], callback);
}

updatePassword(user, callback) {
    var sql = "UPDATE gymit.user SET password= ? WHERE username = ?";
    return db.query(sql, [user.getPassword(), user.getUsername()], callback);
}

updateNumber(user, callback) {
    var sql = "UPDATE gymit.user SET number= ? WHERE username = ?";
    return db.query(sql, [user.getNumber(), user.getUsername()], callback);
}

updateEmail(user, callback) {
    var sql = "UPDATE gymit.user SET email = ? WHERE username = ?";
    return db.query(sql, [user.getEmail(), user.getUsername()], callback);
}

deleteUser(user, callback){
    var sql = "DELETE FROM gymit.user WHERE username = ?";
    return db.query(sql, [user.getUsername()], callback);
}

login(username, callback){
    var sql = "SELECT password FROM gymit.user WHERE username = ? ";
    return db.query(sql, [username], callback);
}


resetPassword(user, callback){
    var sql = "SELECT * FROM gymit.user WHERE username = ? AND email = ? ";
    return db.query(sql, [user.getUsername(), user.getEmail()], callback);
}

}

module.exports = UsersDB


