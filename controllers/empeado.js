const Empleado = require('../models/empleado');
const express = require('express');
const API = express.Router();

const crearEmpleado = (req, res) => {
    let empleado = new Empleado(req.body);
    empleado.save((r, e) => {
        if (e) {
            console.log(e);
            res.json(e);
        } else {
            res.json(r);
        }
    });
}

const getList = (req, res) => {
    Empleado.getList((list, err) => {
        if (err) {
            console.log(err)
            res.json(err)
        } else {
            res.json(list)
        }
    })
}

API
.post('/empleado', crearEmpleado)
.get('/lista-empleados', getList)

module.exports = API