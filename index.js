const express = require('express');
const path = require('path');

var app = express();
app.use('/factory', express.static(path.join(__dirname, 'src')));
var server = app.listen('7002', () => {
    console.log('running');
});