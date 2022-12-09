class Sesion {

    constructor() {
        this.modelo = {
            user: String,
            pass: String
        }
        this.user = null
        this.pass = null
    }

    set setUser(obj = this.modelo) {
        this.modulo = obj
    }

    removeUser(){
        this.modulo.user = null
        this.modelo.pass = null
    } 

    sesionActiva() {
        return this.user != null && this.pass != null
    }
}

const sesion = new Sesion()

module.exports = sesion