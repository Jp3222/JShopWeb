class Sesion {

    constructor() {
        this.modelo = {
            user: String,
            pass: String
        }
        this.user = null
        this.pass = null
    }

    setUser(user, pass) {
        this.user = user
        this.pass = pass
    }

    removeUser() {
        if (this.user != null && this.pass != null) {
            this.user = null
            this.pass = null
        }
    }

    sesionActiva() {
        if ((this.user != null) && (this.pass != null)) {
            return true
        }
        return false
    }
}

const sesion = new Sesion()

module.exports = sesion