const pool = require('../modelo/db')
const sesion = require('./util/Sesion')
//
const index = {}

index.getTop = async (req, res) => {
    let query = 'select * from tenis'
    const [result] = await pool.query(query)
    res.render('index', {
        titulo: 'Inicio',
        data: result,
        sesion: sesion.sesionActiva()
    })
}

module.exports = index;