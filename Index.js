require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get( '/twitter', (req, res) => {
 res.send("Tanishka is sending!")
})

app.get('/youtube',(req, res) => {
 res.send("I am strong")
})

app.listen(process.env.PORT, () => {
 console.log(`Example app listening on port ${port}`)
})


