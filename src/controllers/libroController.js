const Libro = require('../models/Libro');
const Categoria = require('../models/Categoria');

// Listar todos los libros con sus categorías
exports.listarLibros = async (req, res) => {
    try {
        const libros = await Libro.findAll({
            include: [{
                model: Categoria,
                attributes: ['Nombre_categoria']  // Incluye el nombre de la categoría
            }]
        });
        res.render('libros/listarLibros', { libros });
    } catch (error) {
        console.error('Error al listar los libros:', error);
        res.status(500).send('Error al listar los libros');
    }
};

// Formulario para agregar un libro
exports.agregarLibro = async (req, res) => {
    try {
        const categorias = await Categoria.findAll(); // Obtén las categorías para el formulario
        res.render('libros/agregarLibro', { categorias });
    } catch (error) {
        console.error('Error al cargar el formulario de libro:', error);
        res.status(500).send('Error al cargar el formulario de libro');
    }
};

// Guardar un nuevo libro
exports.guardarLibro = async (req, res) => {
    const { Titulo, Autor, Portada, id_categoria, Fecha_publicacion, ISBN, Cantidad_disponible } = req.body;
    try {
        await Libro.create({
            Titulo,
            Autor,
            Portada,
            id_categoria,
            Fecha_publicacion,
            ISBN,
            Cantidad_disponible
        });
        res.redirect('/libros');
    } catch (error) {
        console.error('Error al guardar el libro:', error);
        res.status(500).send('Error al guardar el libro');
    }
};

// Formulario para editar un libro
exports.editarLibroForm = async (req, res) => {
    try {
        const libro = await Libro.findByPk(req.params.id);
        const categorias = await Categoria.findAll(); // Obtén todas las categorías para el formulario
        res.render('libros/editarLibro', { libro: libro.get({ plain: true }), categorias });
    } catch (error) {
        console.error('Error al cargar el formulario de edición del libro:', error);
        res.status(500).send('Error al cargar el formulario de edición del libro');
    }
};

// Actualizar un libro existente
exports.actualizarLibro = async (req, res) => {
    const { Titulo, Autor, Portada, id_categoria, Fecha_publicacion, ISBN, Cantidad_disponible } = req.body;
    try {
        await Libro.update(
            { Titulo, Autor, Portada, id_categoria, Fecha_publicacion, ISBN, Cantidad_disponible },
            { where: { id_libro: req.params.id } }
        );
        res.redirect('/libros');
    } catch (error) {
        console.error('Error al actualizar el libro:', error);
        res.status(500).send('Error al actualizar el libro');
    }
};

// Eliminar un libro
exports.eliminarLibro = async (req, res) => {
    try {
        await Libro.destroy({ where: { id_libro: req.params.id } });
        res.redirect('/libros');
    } catch (error) {
        console.error('Error al eliminar el libro:', error);
        res.status(500).send('Error al eliminar el libro');
    }
};
