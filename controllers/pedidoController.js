const Pedido = require('../models/Pedido');

let pedidoController = {

    listarPedido: (req, res)=>{
        let listaPedido = Pedido.listarPedido();
        res.render('pedido', {pedido:listaPedido, tituloDaPagina:"Será que da certo?"})
    },

   viewFormPedido: (req, res) =>{
        res.render('criarPedido');
    },

    realizarPedido: (req, res) =>{
        res.render('sucessoPedido', req.body);
    },
}

 
module.exports = pedidoController