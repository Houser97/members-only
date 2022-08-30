const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {DateTime} = require('luxon');

const messageSchema = new Schema({
    title: {type: String, required: true},
    timestamp: {type: Date, default: Date.now},
    text: {type: String, required: true},
    author: {type: Schema.Types.ObjectId, required: true}
});

messageSchema.virtual('timestamp_formatted').get(function(){
    return DateTime.fromJSDate(this.timestamp).toLocaleString(DateTime.DATE_MED);
})

module.exports = mongoose.model('Message', messageSchema);