"use strict";

class Pr {
    constructor(username, benchpressPr, deadliftPr, squatPr, weight, height, benchpressTarget, deadliftTarget, squatTarget, date, picture) {
        this.username = username;
        this.benchpressPr = benchpressPr;
        this.deadliftPr = deadliftPr;
        this.squatPr = squatPr;
        this.weight = weight;
        this.height = height;
        this.benchpressTarget = benchpressTarget;
        this.deadliftTarget = deadliftTarget;
        this.squatTarget = squatTarget;
        this.date = date;
        this.picture = picture;
    }
    getUsername() {
        return this.username;
    }
    getBenchpressPr() {
        return this.benchpressPr;
    }
    getDeadliftPr() {
        return this.deadliftPr;
    }
    getSquatPr() {
        return this.squatPr;
    }
    getWeight() {
        return this.weight;
    }
    getHeight() {
        return this.height;
    }
    getbenchpressTarget(){
        return this.benchpressTarget;
    }
    getdeadliftTarget(){
        return this.deadliftTarget;
    }
    getsquatTarget(){
        return this.squatTarget;
    }
    getDate(){
        return this.date;
    }
    getPicture(){
        return this.picture;
    }
    

    setUsername(username) {
        this.username = username;
    }
    setBenchpressPr(benchpress) {
        this.benchpress = benchpress;
    }
    setDeadliftPr(deadlift) {
        this.deadlift = deadlift;
    }
    setSquatPr(squat) {
        this.squat = squat;
    }
    setWeight(weight) {
        this.weight = weight;
    }
    setHeight(height) {
        this.height = height;
    }
    setBenchpressTarget(benchpressTarget) {
        this.benchpressTarget = benchpressTarget;
    }
    setDeadliftTarget(deadliftTarget) {
        this.deadliftTarget = deadliftTarget;
    }
    setSquatTarget(squatTarget) {
        this.squatTarget = squatTarget;
    }
    setDate(date) {
        this.date = date;
    }
    setPicture(picture) {
        this.picture = picture;
    }
    
}

module.exports = Pr