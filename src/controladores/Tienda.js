const express = require('express')
const rutas = express.Router()
const pool = require('../modelo/db')
const car = require('./util/Carrito')
const sesion = require('../controladores/util/Sesion')

//Carrito

//carrito
const tienda = {}

const db_nombre = 'tenis'
const db_columnas = ['nombre', 'modelo', 'marca', 'talla', 'precio', 'Descripcion']
/**
 * Metodo que renderiza la pagina principal de tienda con todos los productos
 * @param {*} req 
 * @param {*} res 
 */
tienda.getListaAll = async (req, res) => {
    let query = 'select * from tenis'
    //buscando todos los productos
    const [result] = await pool.query(query)
    //render
    res.render('tienda/tienda', {
        titulo: 'Productos',
        data: result,
        sesion:sesion.sesionActiva()
    })
}

tienda.getProducto = async (req, res) => {
    let query = 'select * from tenis where id = ?';
    //Buscando producto
    let id = req.params.id.replace(':', '');
    let [result] = await pool.query(query, [id]);
    //Remplanzando 'id' por la 'marca'
    let query2 = 'select marca from marcas where id = ?';
    let [marca] = await pool.query(query2, [result[0].marca])
    result[0].marca = marca[0].marca
    //renderizando pagina
    res.render('tienda/producto', {
        titulo: 'Productos',
        data: result[0],
        sesion:sesion.sesionActiva()
    })
}
tienda.addCarrito = async (req, res) => {
    if(!sesion.sesionActiva()){
        res.redirect('/Iniciar-Sesion')
        return
    }
    let query = 'select * from tenis where id = ?'
    let id = req.params.id;
    let cantidad = req.body.cantidad
    //Buscando producto
    let [result] = await pool.query(query, [id])
    obj = {
        id: result[0].id,
        nombre: result[0].nombre,
        costo: result[0].precio,
        cantidad: parseInt(cantidad)
    }
    car.add(obj)
    car.showLista();
    //renderizando pagina
    res.redirect('/Tienda')
}
module.exports = tienda;