let miembros = [
    { id: 1, nombre: "Christopher Nolan", plan: "5$", tiempoSuscripcion: "4 meses" },
    { id: 2, nombre: "Cillian Murphy", plan: "50$", tiempoSuscripcion: "1 año" }
];

const obtenerMiembros = (req, res) => {
    res.json(miembros);
};

//GET

const obtenerMiembroPorId = (req, res) => {
    const id = parseInt(req.params.id);
    const miembro = miembros.find(m => m.id === id);
    
    if (!miembro) {
        return res.status(404).json({ error: "Miembro del cine no encontrado" });
    }
    res.json(miembro);
};

//POST

const crearMiembro = (req, res) => {
    const { nombre, plan, tiempoSuscripcion } = req.body;
    if (!nombre || !plan) {
        return res.status(400).json({ error: "El nombre y el plan son obligatorios" });
    }
    const nuevoMiembro = {
        id: miembros.length > 0 ? miembros[miembros.length - 1].id + 1 : 1,
        nombre,
        plan,
        tiempoSuscripcion: tiempoSuscripcion || "Indeterminado"
    };
    miembros.push(nuevoMiembro);
    res.status(201).json(nuevoMiembro);
};

//PUT

const actualizarMiembro = (req, res) => {
    const id = parseInt(req.params.id);
    const { nombre, plan, tiempoSuscripcion } = req.body;
    
    const index = miembros.findIndex(m => m.id === id);
    if (index === -1) {
        return res.status(404).json({ error: "Miembro no encontrado para actualizar" });
    }

    miembros[index] = {
        ...miembros[index],
        nombre: nombre || miembros[index].nombre,
        plan: plan || miembros[index].plan,
        tiempoSuscripcion: tiempoSuscripcion || miembros[index].tiempoSuscripcion
    };

    res.json(miembros[index]);
};

//DELETE

const eliminarMiembro = (req, res) => {
    const id = parseInt(req.params.id);
    const index = miembros.findIndex(m => m.id === id);
    
    if (index === -1) {
        return res.status(404).json({ error: "Miembro no encontrado para eliminar" });
    }

    miembros.splice(index, 1);
    res.status(204).send();};

module.exports = {
    obtenerMiembros,
    obtenerMiembroPorId,
    crearMiembro,
    actualizarMiembro,
    eliminarMiembro
};