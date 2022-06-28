const booksModel = require('../models/books.model');
const { v4: uuidv4 } = require('uuid');

const getBooks = (req, res) => {
    booksModel.find({}, (err, data) => {
        if (data !== null)
            res.status(200).send(data);
        else if (data === null)
            res.status(404).send({ success: true, message: 'BOOKS NOT FOUND' });
        else
            throw err;
    })
}

const getBook = (req, res) => {
    booksModel.findOne({ bookId: req.params.bookId }, (err, data) => {
        if (data !== null)
            res.status(200).send(data);
        else if (data === null)
            res.status(404).send({ success: true, message: 'BOOK NOT FOUND' });
        else
            throw err;
    });
}

const addBook = (req, res) => {
    let book = new booksModel({
        _id: uuidv4(),
        bookName: req.body.bookName,
        bookPrice: req.body.bookPrice
    });
    book.save((err) => {
        if (!err)
            res.status(201).send({ success: true, message: 'BOOK ADDED SUCCESSFULLY' });
        else
            throw err;
    })
}

const deleteBook = (req, res) => {
    booksModel.deleteOne({ bookId: req.params.bookId }, (err, data) => {
        if (!err)
            res.status(200).send({ success: true, message: 'BOOK DELETED SUCCESSFULLY' });
        else
            throw err;
    })
}

const updateBook = (req, res) => {
    booksModel.updateOne({ bookId: req.params.bookId }, { $set: { bookName: req.body.bookName, bookPrice: req.body.bookPrice } }, (err, data) => {
        if (!err)
            res.status(200).send({ success: true, message: 'BOOK UPDATED SUCCESSFULLY' });
        else
            throw err;
    });
}

module.exports = { getBooks, getBook, addBook, updateBook, deleteBook };