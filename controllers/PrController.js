"use stict";

const Pr = require("../models/Pr");
const PrDB = require("../models/prDB");


var prDB = new PrDB();

function getUserPr(request, respond){
    prDB.getUserPr(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}


function addPr(request, respond){
    var now = new Date();
    var pr = new Pr(request.body.username, request.body.benchpressPr, request.body.deadliftPr, request.body.squatPr,request.body.weight, request.body.height, request.body.benchpressTPr, request.body.deadliftTPr, request.body.squatTPr, now.toString(), request.body.picture);
    prDB.addPr(pr, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        }
    });
}





module.exports = {getUserPr, addPr};
