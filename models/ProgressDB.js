"use strict";

var db = require('../db_connections');


class ProgressDB {

    getUserProgress(callback) {
        var sql = "SELECT * FROM gymit.progress;";
        db.query(sql, callback);   
    }
    
    addProgress(progress, callback){
        var sql = "INSERT INTO gymit.progress (username, benchpress, deadlift, squat, weight, date, picture) VALUES (?, ?, ?, ?, ?, ?, ?)";
        db.query(sql, [progress.getUsername(), progress.getBenchpress(), progress.getDeadlift(), progress.getSquat(), progress.getWeight(), progress.getDate(), progress.getPicture()], callback);
    }
}


module.exports = ProgressDB