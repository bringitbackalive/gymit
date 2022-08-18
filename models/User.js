"use strict";

class User {
    constructor(username, password, email, number, name, weight, height, age) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.number = number;
        this.name = name;
        this.weight = weight;
        this.height = height;
        this.age = age; 
    }
    getUsername() {
        return this.username;
    }
    getPassword() {
        return this.password;
    }
    getEmail() {
        return this.email;
    }
    getNumber() {
        return this.number;
    }
    getName() {
        return this.name;
    }
    getWeight(){
        return this.weight;
    }
    getHeight() {
        return this.height;
    }
    getAge() {
        return this.age;
    }

    setUsername(username) {
        this.username = username;
    }
    setPassword(password) {
        this.password = password;
    }
    setEmail(email) {
        this.email = email;
    }
    setNumber(number) {
        this.number = number;
    }
    setName(name) {
        this.name = name;
    }
    setWeight(weight) {
        this.weight = weight;
    }
    setHeight(height) {
        this.height = height;
    }
    setAge(age) {
        this.age = age;
    }
    
}

module.exports = User