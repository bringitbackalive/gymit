"use strict";

var db = require('../db_connections');


class PrDB {

    getUserPr(callback) {
        var sql = "SELECT * FROM gymit.usergymrecord;";
        db.query(sql, callback);   
    }
    
    addPr(progress, callback){
      var sql = "INSERT INTO `gymit`.`usergymrecord` (`Username`, `BenchpressPr`, `DeadliftPr`, `SquatPr`, `Weight`, `Height`, `BenchpressTarget`, `DeadliftTarget`, `SquatTarget`, `Date`,  `picture`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        db.query(sql, [progress.getUsername(), progress.getBenchpressPr(), progress.getDeadliftPr(), progress.getSquatPr(), progress.getWeight(), progress.getHeight(), progress.getbenchpressTarget(),progress.getdeadliftTarget(),progress.getsquatTarget(), progress.getDate(), progress.getPicture()], callback);
    }
  }

module.exports = PrDB;