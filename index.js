const express = require('express')
const methodOverride = require('method-override');
const session = require('express-session');
let rotasUsuario = require('./routes/usuarioRoute');
let rotasCardapio = require('./routes/cardapioRoute');
let rotasPedido = require('./routes/pedidosRoute');



let app = express()
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));

app.use(express.urlencoded({
    extended: true
}));
app.use(session({
    secret:'augusto',
    resave: true,
    saveUninitialized: true
}));

app.use('/usuarios', rotasUsuario);
app.use('/cardapio', rotasCardapio);
app.use('/pedido', rotasPedido);






app.listen(3300, () => console.log("Servidor rodando perfeitamente"))