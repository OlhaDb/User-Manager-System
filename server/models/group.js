const mongoose = require ('mongoose');
const Schema = require('mongoose').Schema;

const GroupSchema = new Schema ({
    groupID: String,
    name: String,
    createdAt: {type: Date, default : Date.now }

});

module.exports = mongoose.model('Group', GroupSchema);
