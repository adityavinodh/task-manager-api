const path = require('path')
const express = require('express')
const hbs = require('hbs')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const cookieParser = require('cookie-parser')
const auth = require('./middleware/auth')

const app = express()
const port = process.env.PORT

const viewsPath = path.join(__dirname, './views')
app.set('view engine', 'hbs')
app.set('views', viewsPath)

app.use(express.static('public'))
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)
 
// Express server is listening on port 3000
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

app.get('/home', auth, (req, res) => {
    try {
        res.render('private')
    } catch (e) {
        res.status(400).send()
    }
})