const express = require ('express');
const router = express.Router();
const path = require('path')
const productsApi = require ('../../controllers/apis/productsApi')


router.get('/products', productsApi.products)
router.get('/products/:idProducto', productsApi.productById)
router.get('/mostPopular', productsApi.masPopular)
// router.get('/lastImage', productsApi.lastProductImage)
// router.get('/lastImage/:id', productsApi.showLastProductImage)

module.exports = router;