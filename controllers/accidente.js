const Empleado = require('../models/empleado');
const Accidente = require('../models/accidente');
const express = require('express');
const formidable = require('formidable');
const API = express.Router();
const Jimp = require('jimp')
const db = require('../db');
const path = require("path")

max_size = 1024
max_slide_size = 1920
quality = 80

const crearAccidente = (req, res) => {
    let form = formidable.IncomingForm()
    form.parse(req, (err, fields, files) => {
        let accidente = new Accidente(JSON.parse(fields.data));
        accidente.save((r, e) => {
            if (e) {
                console.log(e);
                res.json(e);
            } else {
                Object.entries(files).forEach(([k, v]) => {
                    Jimp.read(v.path).then(image => {
                        if (image.bitmap.width > max_size || image.bitmap.height > max_size)
                            image.scaleToFit(max_size, max_size)
                        image.quality(quality)
                        fileName = path.basename(v.path).replace('upload_', '')+'.jpg'
                        db.query(`INSERT INTO imagen SET ?`, { nombre: fileName, accidente: r.id })
                        image.writeAsync(`public/images/${fileName}`).catch(er => console.log(er))
                    }).catch(error => console.log(error))
                })
                res.json(r);
            }
        })
    })
}

const getList = (req, res) => {
    Accidente.getList((list, err) => {
        if (err) {
            console.log(err)
            res.json(err)
        } else {
            res.json(list)
        }
    })
}

const getAccidente = (req, res) => {
    Accidente.getAccidente(req.params.id, (accidente, err) => {
        if (err) {
            console.log(err);
            res.json(err)
        } else {
            accidente = accidente[0]
            Empleado.getEmpleado(accidente.empleado, (empleado, error) => {
                if (error) {
                    console.log(error)
                    res.json(error)
                } else {
                    empleado = empleado[0]
                    Accidente.getImagenes(req.params.id, (imagenes, e) => {
                        if (e) {
                            console.log(e)
                            res.json(e)
                        } else {
                            res.json({ accidente, empleado, imagenes })
                        }
                    })
                }
            })
        }
    })
}

API
.post('/accidente', crearAccidente)
.get('/accidentes', getList)
.get('/accidente/:id', getAccidente)

module.exports = API