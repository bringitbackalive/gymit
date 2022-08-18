"use strict";

class Progress {
    constructor(username, benchpress, deadlift, squat, weight, date, picture) {
        this.username = username;
        this.benchpress = benchpress;
        this.deadlift = deadlift;
        this.squat = squat;
        this.weight = weight;
        this.date = date;
        this.picture = picture;
    }
    getUsername() {
        return this.username;
    }
    getBenchpress() {
        return this.benchpress;
    }
    getDeadlift() {
        return this.deadlift;
    }
    getSquat() {
        return this.squat;
    }
    getWeight() {
        return this.weight;
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
    setBenchpress(benchpress) {
        this.benchpress = benchpress;
    }
    setDeadlift(deadlift) {
        this.deadlift = deadlift;
    }
    setSquat(squat) {
        this.squat = squat;
    }
    setWeight(weight) {
        this.weight = weight;
    }
    setDate(date) {
        this.date = date;
    }
    setPicture(picture) {
        this.picture = picture;
    }
    
}

module.exports = Progress