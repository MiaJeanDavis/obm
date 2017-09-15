const express = require('express')
const path = require('path')
const app = express()

// var config = require('./config.json');

app.set('view engine', 'ejs')

/* Serve pelican-generated output files */
app.use('/', express.static(path.resolve(__dirname, './output')))

// Routes
app.get('/', function (req, res) {
    res.render('output/index.html')
})


const port = process.env.PORT || 3000
app.listen(port, function () {
    console.log('Running on port 3000!')
})
