const index = {}
const db_nombre = 'tenis'
const db_columnas = ['nombre', 'modelo', 'marca', 'talla', 'precio', 'Descripcion']

index.add = (req, res) => {
    req.getConnection((err, conn) => {
        let query = 'insert into tenis(nombre,modelo,marca,talla,precio,Descripcion) values(?,?,?,?,?,?)';
        conn.query(query, db_columnas, (err, row) => {

        })
    })

}

index.listAll = (req, res) => {
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
                res.render('index', {
                    titulo: 'Inicio',
                    data: lista
                })
            })


        })
    })
}

module.exports = index;