require('dotenv').config()

const express = require('express')
const userRoutes = require('./routes/userRoutes')
const db = require('./db')

const app = express()

app.use(express.json())
  
app.use('/users', userRoutes)


db.connect(() => {
    app.listen(process.env.PORT, () => {
        console.log('Server Started')
    })
})


