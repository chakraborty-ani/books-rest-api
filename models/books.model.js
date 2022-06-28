const mongoose = require('mongoose');

const booksSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    bookName: {
        type: String,
        required: true
    },
    bookPrice: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Book', booksSchema, 'Books');