const Categoria = require('../models/Categoria');

// Listar todas las categorías
exports.listarCategorias = async (req, res) => {
    try {
        const categorias = await Categoria.findAll();
        res.render('categorias/listarCategorias', { categorias });
    } catch (error) {
        console.error('Error al listar las categorías:', error);
        res.status(500).send('Error al listar las categorías');
    }
};

// Formulario para agregar categoría
exports.agregarCategoria = (req, res) => {
    res.render('categorias/agregarCategoria');
};

// Guardar nueva categoría
exports.guardarCategoria = async (req, res) => {
    const { Nombre_categoria, Descripcion } = req.body;
    try {
        await Categoria.create({ Nombre_categoria, Descripcion });
        res.redirect('/categorias');
    } catch (error) {
        console.error('Error al guardar la categoría:', error);
        res.status(500).send('Error al guardar la categoría');
    }
};

// Formulario para editar categoría
exports.editarCategoriaForm = async (req, res) => {
    try {
        const categoria = await Categoria.findByPk(req.params.id);
        res.render('categorias/editarCategoria', { categoria: categoria.get({ plain: true }) });
    } catch (error) {
        console.error('Error al cargar la categoría:', error);
        res.status(500).send('Error al cargar la categoría');
    }
};

// Actualizar categoría
exports.actualizarCategoria = async (req, res) => {
    const { Nombre_categoria, Descripcion } = req.body;
    try {
        await Categoria.update({ Nombre_categoria, Descripcion }, { where: { id_categoria: req.params.id } });
        res.redirect('/categorias');
    } catch (error) {
        console.error('Error al actualizar la categoría:', error);
        res.status(500).send('Error al actualizar la categoría');
    }
};

// Eliminar categoría
exports.eliminarCategoria = async (req, res) => {
    try {
        await Categoria.destroy({ where: { id_categoria: req.params.id } });
        res.redirect('/categorias');
    } catch (error) {
        console.error('Error al eliminar la categoría:', error);
        res.status(500).send('Error al eliminar la categoría');
    }
};
