var express = require('express')

var app = express()
var PORT = process.env.PORT || 3000

app.get('*', (req, res) => {
    res.send('Hello world')
})

app.listen(PORT, () => {
    console.log(`App listening port : ${PORT}`)
})

module.exports = app