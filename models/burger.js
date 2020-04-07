const orm = require("../config/orm.js");
const database = "heroku_d72885f0b1ac380.";

const burger = {
    selectAll: function(cb) {
        orm.selectAll(database+"burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb) {
        orm.insertOne(database+"burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    updateOne: function(objVals, condition, cb) {
        orm.updateOne(database+"burgers", objVals, condition, function(res) {
            cb(res);
        });
    }
}

module.exports = burger;