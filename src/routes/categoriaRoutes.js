const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoriaController');

router.get('/', categoriaController.listarCategorias);
router.get('/agregar', categoriaController.agregarCategoria);
router.post('/agregar', categoriaController.guardarCategoria);
router.get('/editar/:id', categoriaController.editarCategoriaForm);
router.post('/editar/:id', categoriaController.actualizarCategoria);
router.post('/eliminar/:id', categoriaController.eliminarCategoria);

module.exports = router;
