const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes')
const app = express();

mongoose.connect('mongodb+srv://Philipe:06111998@cluster0-fz4yp.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);

//Métodos HTTP: get, post, put, delete

//Tipos de parâmetros:

//Query Params: request.query(filtros, ordenação, paginação,...)
//Route Params: request.params(identificar um recurso na alteração ou remoção)
//Body: request.body(Dados para criação ou alteração de um registro)

//MongoDB (Não-relacional)
