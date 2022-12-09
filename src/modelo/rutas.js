const express = require('express')
const rutas = express.Router()
const tienda = require('../controladores/Tienda')
const pool = require('../modelo/db')

//


/**
 * Nombre de las rutas
 * seccion + tabla + op + {datos}
 */

//Inicio
rutas.get('/', async (req, res) => {
    let query = 'select * from tenis'
    const [result] = await pool.query(query)
    console.log(result)
    res.render('index', {
        titulo: 'Inicio',
        data: result
    })
})

//Tienda
rutas.get('/Tienda', tienda.getListaAll)
rutas.get('/Tienda/Productos/:id', tienda.getProducto)
rutas.get('/Tienda/Productos/Agregar-Carrito',tienda.addCarrito)

//Otros
rutas.get('/Compañia', (req, res) => { })

//Inicio de sesion
rutas.get('/Iniciar-Sesion', (req, res) => {
    res.render('usuarios/login', {
        titulo: 'Inicio de Sesion'
    })
})

rutas.get('/panel-usuario-xd', (req, res) => {
    res.render('usuarios/usuarioPanel', {
        titulo: 'Menu'
    })
})

//rutas.get('',(req,res)=>{})
module.exports = rutas;