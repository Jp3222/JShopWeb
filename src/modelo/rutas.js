const express = require('express')
const rutas = express.Router()
const funn = require('../controladores/Tienda')
    // 
    rutas.get('/', (req, res) => {
        res.render('index', {
            titulo: 'Inicio'
        })
    })

rutas.get('/Tienda', funn.listAll)

rutas.get('/Iniciar-Sesion',(req,res)=>{
    res.render('usuarios/login',{
        titulo:'Inicio de Sesion'
    })
})

rutas.get('')
//
module.exports = rutas;