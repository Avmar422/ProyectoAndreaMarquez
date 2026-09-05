const { Router } = require('express');
const { 
    obtenerMiembros, 
    obtenerMiembroPorId, 
    crearMiembro, 
    actualizarMiembro, 
    eliminarMiembro 
} = require('../controllers/miembros.controller');

const router = Router();

router.get('/', obtenerMiembros);
router.get('/:id', obtenerMiembroPorId);
router.post('/', crearMiembro);
router.put('/:id', actualizarMiembro);
router.delete('/:id', eliminarMiembro);

module.exports = router;