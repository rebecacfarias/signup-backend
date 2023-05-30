const mongoose = require('mongoose')

const connectionUrl = process.env.DATABASE_URL


const connect = (onConnect) =>{
    mongoose.connect(connectionUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    
    const db = mongoose.connection
    
    db.on('error', (error) => {
        console.log(error)
    })
    
    db.once('connected', () => {
        console.log('Database Connected')
        onConnect && onConnect()
    })
}

module.exports = {
    connect
}
