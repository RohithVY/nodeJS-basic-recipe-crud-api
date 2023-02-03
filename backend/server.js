const express = require('express');
const dotenv = require('dotenv').config();

const port = process.env.PORT || 5000;

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use('/url',require('./routers/receipeRoutes'))

app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
})
