const express = require('express');
const bodyParser = require('body-parser');
const requestLogger = require('./requestLogger');
const productRoutes = require('./routes/productRoutes');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use(requestLogger);

app.use(require('./routes/productRoutes'));
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: err.message || 'Erreur interne du serveur',
  });
});

app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});