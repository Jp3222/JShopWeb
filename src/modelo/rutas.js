const express = require('express')
const rutas = express.Router()
//
const tienda = require('../controladores/Tienda')
const index = require('../controladores/Index')
const usuarios = require('../controladores/usuarios')
//
const pool = require('../modelo/db')
const sesion = require('../controladores/util/Sesion')
//


/**
 * Nombre de las rutas
 * seccion + tabla + op + {datos}
 */

//Inicio
rutas.get('/', index.getTop)

//Otros
rutas.get('/Compañia', (req, res) => { })

//Inicio de sesion
rutas.get('/Iniciar-Sesion', usuarios.getLogin)
rutas.post('/usuarios/inicio-sesion', usuarios.login)
rutas.get('/usuarios/panel-usuarios', usuarios.getPanelUsuarios)

//Tienda
rutas.get('/Tienda', tienda.getListaAll)
rutas.get('/Tienda/Productos/:id', tienda.getProducto)
rutas.post('/Tienda/Productos/Agregar-Carrito/:id', tienda.addCarrito)


//rutas.get('',(req,res)=>{})
module.exports = rutas;