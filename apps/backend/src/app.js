const express = require("express");
const cors = require("cors");
const miembrosRouter = require('./routes/miembros.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/miembros', miembrosRouter);

app.use((req, res) => {
    res.status(404).json({ error: "Ruta no encontrada" });
});

module.exports = app;