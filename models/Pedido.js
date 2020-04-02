let pedido = [
    
]
function listarPedido(){
    return pedido;
}

function realizarPedido(saborPizza, nome, endereco){
    return pedido.push({saborPizza, nome, endereco});

}


module.exports = {listarPedido, realizarPedido}