const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(__dirname + '/static'));

app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'static', 'index.html'))
})

app.listen(5000, () => console.log('Listening on port 5000'))