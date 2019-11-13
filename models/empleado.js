const db = require('../db');

class Empleado {
    constructor({
        cedula,
        nombre,
        correo,
        nacimiento,
        sexo,
        area,
        cargo,
        ingreso
    }) {
        this.cedula = cedula;
        this.nombre = nombre;
        this.correo = correo;
        this.nacimiento = nacimiento;
        this.sexo = sexo;
        this.area = area;
        this.cargo = cargo;
        this.ingreso = ingreso;
    }

    // Inserta o actualiza un empleado
    save(callback) {
        if (this.id == undefined) {
            db.query(`INSERT INTO empleado SET ?`, this).then(r => callback({ id: r.insertId })).catch(e => callback(undefined, e))
        } else {
            db.query(`UPDATE empleado SET ?`, this).then(r => callback({ id: this.id })).catch(e => callback(undefined, e))
        }
    }

    // Obtiene lista de empleados
    static getList(callback) {
        db.query(`SELECT id, cedula, nombre, ingreso FROM empleado`).then(r => callback(r)).catch(e => callback(undefined, e))
    }

    static getEmpleado(id, callback) {
        db.query(`SELECT * FROM empleado WHERE id = ${id}`).then(r => callback(r)).catch(e => callback(undefined, e))
    }
}

module.exports = Empleado