const express = require('express');
const pedidoController = require('../controllers/pedidoController');

let route = express.Router()
//rotas a partir daqui!



route.get('/ver', pedidoController.listarPedido);
route.get('/cadastro', pedidoController.viewFormPedido);

route.post('/cadastro', pedidoController.realizarPedido);

module.exports = route