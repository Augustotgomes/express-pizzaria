const express = require('express')
const usuarioController = require('../controllers/usuarioController');
const path = require('path');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join('public', 'usuarioImg'))
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname)
    }
  })
   
const upload = multer({ storage: storage })


let route = express.Router()

route.get('/cadastro', usuarioController.viewFormCadastro);
route.get('/ver', usuarioController.listarUsuario);
route.post('/cadastro', usuarioController.criarUsuario);
route.get('/login', usuarioController.viewFormLogin);
route.post('/login', usuarioController.login);


module.exports = route;
