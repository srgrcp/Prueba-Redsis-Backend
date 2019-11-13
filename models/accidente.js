const db = require('../db');

class Accidente {

    constructor({
        gravedad,
        fecha,
        lugar,
        tipo,
        lesion,
        parte,
        agente,
        mecanismo,
        descripcion,
        incapacidad,
        diasincapacidad,
        empleado
    }) {
        this.gravedad = gravedad
        this.fecha = fecha
        this.lugar = lugar
        this.tipo = tipo
        this.lesion = lesion
        this.parte = parte
        this.agente = agente
        this.mecanismo = mecanismo
        this.descripcion = descripcion
        this.incapacidad = incapacidad != undefined ? incapacidad : false
        this.diasincapacidad = diasincapacidad,
            this.empleado = empleado
    }

    save(callback) {
        if (this.id == undefined) {
            db.query(`INSERT INTO accidente SET ?`, this).then(r => callback({ id: r.insertId })).catch(e => callback(undefined, e))
        } else {
            db.query(`UPDATE accidente SET ?`, this).then(r => callback({ id: this.id })).catch(e => callback(undefined, e))
        }
    }

    // Obtiene lista de accidentes
    static getList(callback) {
        db.query(`SELECT a.id, fecha, descripcion, e.nombre AS empleado FROM accidente AS a LEFT JOIN empleado AS e ON e.id = a.empleado ORDER BY a.id ASC`)
        .then(r => callback(r)).catch(e => callback(undefined, e))
    }

    static getAccidente(id, callback) {
        db.query(`SELECT * FROM accidente WHERE id = ${id}`).then(r => callback(r)).catch(e => callback(undefined, e))
    }

    static getImagenes(id, callback) {
        db.query(`SELECT * FROM imagen WHERE accidente = ${id}`).then(r => callback(r)).catch(e => callback(undefined, e))
    }

}

module.exports = Accidente