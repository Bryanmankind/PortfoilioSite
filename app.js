const express = require('express')
const path = require('path')

const app = express();
app.use(express.static('./staticPublic'))

// app.get('/about', (req, res) => {
//   res.sendFile(200, path.resolve(__dirname, './staticPublic/about.html'))
// })


app.all('*', (req, res) => {
  res.status(404).send('resource not found')
    
})

app.listen(8080, () => {
    console.log('server listening on port 8080....')
})