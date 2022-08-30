import express from 'express'
import { initDB } from './infraestructure/repository/dataSource'
//import cors from 'cors'
var cors = require('cors')

const app = express()
const routes = require('./server/routes')

app.use(cors())
app.use(express.urlencoded({extended: false}));
app.use(express.json())

app.use('/', routes);

app.listen(8080 , async () => {
    console.log('listen done again')
    await initDB()
})

export = { app }