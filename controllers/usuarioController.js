const Usuario = require('../models/Usuario');
const bcrypt = require('bcrypt');

let usuarioController = {
    listarUsuario: (req, res)=>{
        let listaUsuario = Usuario.listarUsuario();
        console.log(listaUsuario);
        res.render('usuario', {usuario:listaUsuario, 
                    tituloDaPagina:"Será que da certo?"})
    },

    viewFormCadastro: (req, res) =>{
        res.render('cadastroUsuario');
    },

    criarUsuario: (req, res) =>{
        console.log(req.body);
        let {nomeUsuario, emailUsuario, senhaUsuario} = req.body;
        Usuario.cadastrarUsuario(nomeUsuario, emailUsuario, bcrypt.hashSync(senhaUsuario, 10));
        res.redirect('/usuarios/ver');
    },

    deletarUsuario: (req, res) =>{

        let {posicao} = req.params;
        Usuario.deletarUsuario(posicao);
        res.redirect('/usuarios/ver');
       
    },

    viewFormLogin: (req, res) =>{
        res.render('login');
    },

    login: (req, res) =>{
        let {emailUsuario, senhaUsuario} = req.body;

        let usuarioSalvo = Usuario.buscarUsuario(emailUsuario);
        
        if(usuarioSalvo == undefined){
            return res.send("Email ou Senha Inválida");
            // return res.render('login', {msg:"Email ou Senha Inválida"});
        }

        if(!bcrypt.compareSync(senhaUsuario, usuarioSalvo.senha)){
            console.log('comparando senha');
            return res.send("Email ou Senha Inválida");
            // return res.render('login', {msg:"Email ou Senha Inválida"});
        }

        req.session.usuarioLogado = usuarioSalvo.nomeUsuario;

        res.send('login sucesso');
    },

}

 
module.exports = usuarioController