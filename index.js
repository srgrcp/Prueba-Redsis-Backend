const express = require('express')
const app = express()
const empleadoAPI = require('./controllers/empeado')
const accidenteAPI = require('./controllers/accidente')

const bodyParser = require('body-parser')
const morgan = require('morgan')
const path = require("path")

app.set('port', process.env.PORT || 3000)
app.use(morgan('[:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length]'))
app.use(express.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
  });
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api', empleadoAPI)
app.use('/api', accidenteAPI)

app.use(express.static(path.join(__dirname+'/public')))
app.use((req,res)=>{
    res.sendFile(path.join(__dirname+'/../public/index.html'))
})

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'), 'in', app.get("env"), 'mode')
})