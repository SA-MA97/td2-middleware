const express = require('express');
const validateProduct = require('../middlewares/validateProduct');

const router = express.Router();

router.post('/add-product', validateProduct, (req, res) => {
  const { name, price } = req.body;

  res.status(201).json({
    message: 'Produit ajouté avec succès.',
    product: { name, price },
  });
});

module.exports = router;