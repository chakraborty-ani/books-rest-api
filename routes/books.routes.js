const express = require('express');
const { getBooks, getBook, addBook, updateBook, deleteBook } = require('../controllers/books.controller');
const router = express.Router();

router.get('/getBooks', getBooks);
router.get('/getBook/:bookId', getBook);
router.post('/addBook', addBook);
router.put('/updateBook/:bookId', updateBook);
router.delete('/deleteBook/:bookId', deleteBook);

module.exports = router;