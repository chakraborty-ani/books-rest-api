const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

mongoose.connect('mongodb+srv://mongoadmin:TuZ77TgPfjMjIumm@aniket-cluster.1pjyf.mongodb.net/booksDB?retryWrites=true&w=majority');
mongoose.connection.on('open', () => {
    console.log('Connection Successful!');
}).on('error', () => {
    console.log('Connection Unsuccessful!');
});

app.use(bodyParser.json());
app.use('/api/', require('./routes/books.routes'));
app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});