let mongoose = require('mongoose');
let memeSchema = new mongoose.Schema({
    key: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    uId: {
        type: String,
        required: true,
        trim: true
    },
    keywords: {
        type: Array
    },
    description: {
        type: String
    },
    memeFormat: {
        type: String,
        required: true
    },
    mediaLink: {
        type: String
    },
    mediaGridFsId: {
        type: String
    }
});

let Meme = mongoose.model("Meme", memeSchema);
module.exports = Meme;