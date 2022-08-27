const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    title: {type: String, required: true},
    timestamp: {type: Date, default: Date.now},
    text: {type: String, required: true},
    author: {type: String}
});

module.exports = mongoose.model('Message', messageSchema);