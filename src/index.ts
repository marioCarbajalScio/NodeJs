import express from 'express'
import bodyParser from 'body-parser'
import { studentController } from './controllers/studentController'

const port = 1337

const app = express()
app.use( bodyParser.json() )

app.use( '/students', studentController)

app.get('/', (req, res) => {
    res.send('API is running OK')
})

app.listen(port, ()=> {
})
