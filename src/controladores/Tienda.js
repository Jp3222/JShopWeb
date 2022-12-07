const tienda = {}

const db_nombre = 'tenis'
const db_columnas = ['nombre', 'modelo', 'marca', 'talla', 'precio', 'Descripcion']

tienda.listAll = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) {
            res.json(err)
        }
        let query = 'select * from ' + db_nombre
        conn.query(query, (err, row) => {
            if (err) {
                res.json(err)
            }
            let lista = row
            let query = 'select * from marcas'
            conn.query(query, (err, row) => {
                for (let i = 0; i < lista.length; i++) {
                    for (let j = 0; j < row.length; j++) {
                        if (lista[i].marca == row[j].id) {
                            lista[i].marca = row[j].marca
                            break
                        }

                    }
                }
                res.render('tienda', {
                    titulo: 'Tienda',
                    data: lista
                })
            })


        })
    })
}

module.exports = tienda;