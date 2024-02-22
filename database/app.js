const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const UsuarioRoutes = require('./routes/UsuarioRoutes');

app.use(bodyParser.json());
app.use('/usuarios', UsuarioRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
