const pool = require('../modelo/db')
const sesion = require('./util/Sesion')

const usuarios = {}

usuarios.getLogin = async (req, res) => {
    res.render('usuarios/login', {
        titulo: 'Inicio de Sesion',
        sesion: sesion.sesionActiva()
    })
}

usuarios.login = async (req, res) => {
    //recuperar datos del formulario
    let { user, pass } = req.body
    //buscar usuarios
    let query = 'select * from usuarios where usuario = ? and pass = ?'
    const [usuarios] = await pool.query(query, [user, pass]);
    //validacion de usuarios
    if (!sesion.sesionActiva() && usuarios.length > 0) {
        sesion.setUser(usuarios[0].usuario, usuarios[0].pass)
        res.redirect('/usuarios/panel-usuarios')
        return
    } else {
        sesion.removeUser()
        res.redirect('/Iniciar-Sesion')
        return
    }
}

usuarios.getPanelUsuarios = async (req, res) => {
    res.render('usuarios/usuarioPanel', {
        titulo: 'Menu',
        sesion: sesion.sesionActiva()
    })
}

module.exports = usuarios;