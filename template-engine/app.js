const app = require('express')();
const userRouter = require('./routers/userRouter')
const bodyParser = require('body-parser');
app.set('views', './views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine

app.use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded
app.use(bodyParser.json()) // parse application/json

app.use('/', userRouter)

app.listen(3000, () => console.log('running on port 3000'))
