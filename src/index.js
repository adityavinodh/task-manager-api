const path = require('path')
const express = require('express')
const hbs = require('hbs')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

// Express will parse all incoming json files to javascript objects
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

// Express server is listening on port 3000
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const cookieParser = require('cookie-parser')
 
app.use(express.static('public'))
// app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())