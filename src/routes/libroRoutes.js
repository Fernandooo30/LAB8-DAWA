const express = require('express');
const router = express.Router();
const libroController = require('../controllers/libroController');

router.get('/', libroController.listarLibros);
router.get('/agregar', libroController.agregarLibro);
router.post('/agregar', libroController.guardarLibro);
router.get('/editar/:id', libroController.editarLibroForm);
router.post('/editar/:id', libroController.actualizarLibro);
router.post('/eliminar/:id', libroController.eliminarLibro);

module.exports = router;
