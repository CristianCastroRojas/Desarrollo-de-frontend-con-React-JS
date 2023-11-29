const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Conéctate a MongoDB
mongoose.connect('mongodb://localhost:27017/Form', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conectado a MongoDB');
});

// Configura body-parser para manejar datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define el modelo del formulario
const ReactProjects = mongoose.model('ReactProjects', {
  name: String,
  phone: String,
  city: String,
  email: String,
  description: String,
});

// Ruta para manejar el envío del formulario
app.post('/api/enviar-formulario', async (req, res) => {
  try {
    const nuevoFormulario = new ReactProjects(req.body);
    await nuevoFormulario.save();
    res.status(201).json({ mensaje: 'Formulario enviado con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al procesar el formulario' });
  }
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
