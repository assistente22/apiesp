const express = require("express");
const _pix = require("faz-um-pix");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3001;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    next()
})

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', (req, res) =>{

    var resp = _pix.Pix(req.body['chave'],req.body['name'], req.body['city'], req.body['valor'], req.body['desc'], true).then(resposta =>{
        res.send(resposta)
    })

})

app.listen(port, ()=>{
    console.log('listening on port ${port}')
})




