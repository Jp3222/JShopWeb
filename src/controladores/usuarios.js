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

module.exports = usuarios;