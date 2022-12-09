const usuarios = {}

usuarios.getUsuario = (req, res) => {
    req.getConnection((err, con) => {
        if(err){
            res.render(
                ''
            )
        }
    })
}

usuario.get = (req, res)={
    res.render()
}

module.exports = usuarios;