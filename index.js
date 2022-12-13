//npm i express morgan mysql express-myconnection ejs mysql2
//npm i nodemon -D
const express = require('express')
const morgan = require('morgan')
//
const mysql = require('mysql')
const myConnection = require('express-myconnection')
//
const path = require('path')
const app = express()
const port = 3000
const xml = require('./src/controladores/util/conn')
//
const rutas = require('./src/modelo/rutas')

//settings
app.set('port', process.env.PORT || port)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'src/vistas'))

//middlewares
app.use(morgan('dev'))
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '12345',
    port: '3306',
    database: 'db_jshop'
}, 'single'))

xml.setStruc('XML',(lista, str) => {
    let x = str.read();
    lista.add(str)
})
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use('/', rutas)

//rutas
app.use(express.static(path.join(__dirname, 'src/public')));

app.listen(port, () => {
    console.log(app.get('views'))
    console.log(`Example app listening on port ${port}`)
})