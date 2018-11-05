const mongoose = require ('mongoose');
const Schema = require('mongoose').Schema;

const UserSchema = new Schema ({
    userID: String,
    firstName: String,
    lastName: String,
    createdAt: {type: Date, default : Date.now },
    groupList: { type: Array }

});

module.exports = mongoose.model ('User', UserSchema);
