"use stict";

const Progress = require("../models/Progress");
const ProgressDB = require("../models/ProgressDB");


var progressDB = new ProgressDB();

function getUserProgress(request, respond){
    
    progressDB.getUserProgress(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}


function addProgress(request, respond){
    var now = new Date();
    var progress = new Progress(request.body.username, request.body.benchpress, request.body.deadlift, request.body.squat, request.body.weight, now.toString(), request.body.picture);
    progressDB.addProgress(progress, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });
}





module.exports = {getUserProgress, addProgress};
