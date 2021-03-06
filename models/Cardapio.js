const fs =require('fs');
const path = require('path');
const db = path.join('cardapio.json');

function listarCardapio(){
    let listaCardapio = fs.readFileSync(db, {encoding: 'utf-8'});
    
    listaCardapio = JSON.parse(listaCardapio);
    return listaCardapio;
}

function cadastrarPizza(nome, preco, imgPizza){
    let listaCardapio = fs.readFileSync(db);
    
    listaCardapio = JSON.parse(listaCardapio);
    listaCardapio.push({nome,preco,imgPizza});
    
    return fs.writeFileSync(db, JSON.stringify(listaCardapio));


}

function deletarPizza(posicaoPizza){

    let listaCardapio = fs.readFileSync(db);
    
    listaCardapio = JSON.parse(listaCardapio);
    listaCardapio.splice(posicaoPizza,1);
    
    return fs.writeFileSync(db, JSON.stringify(listaCardapio));

}


module.exports = {listarCardapio, cadastrarPizza, deletarPizza}