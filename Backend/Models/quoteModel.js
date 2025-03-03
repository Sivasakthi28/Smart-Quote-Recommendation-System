const mongoose = require('mongoose');
const quoteSchema = mongoose.Schema({
    text: { type: String, required: true },
    author: { type: String, required: true },
    mood: { type: String, required: true } 
});
const quoteModel = mongoose.model('Quote', quoteSchema);
module.exports = quoteModel;
