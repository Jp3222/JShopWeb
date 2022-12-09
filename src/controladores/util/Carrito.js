class Carrito {

    constructor() {
        console.log('new car')
        this.modelo = {
            id: String,
            nombre: String,
            consto: 0.0,
            cantidad: 0,
        }

        this.lista = []
    }

    add(obj) {
        let repetido = this.isRepetido(obj)
        if (repetido == -1) {
            this.lista.push(obj)
        } else {
            this.lista[repetido].cantidad += obj.cantidad 
        }
    }

    isRepetido(obj = this.modelo) {
        for (let i = 0; i < this.lista.length; i++) {
            if (this.lista[i].id == obj.id) {
                return i
            }
        }
        return -1
    }

    cobrar() {
        let total = 0.0
        while (this.lista.length > 0) {
            let aux =  this.lista.shift()
            total += (aux.cantidad * aux.consto)
        }
    }

    get Modelo() {
        return this.modelo
    }

    showLista() {
        console.log(this.lista)
    }
}

const obj = new Carrito()
module.exports = obj