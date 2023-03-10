const express = require ('express');
const router = express.Router();
const productCartController = require ('../controllers/productCartController');
const authMiddleware = require('../middlewares/globalesYruta/authMiddleware');


router.get('/rental-cart', authMiddleware, productCartController.productCart)

//Ruta eliminar producto del carrito
router.delete('/destroyProduct', authMiddleware, productCartController.eliminarProductoDelCarrito)


//Ruta cuando se compro todo (Elimina todo el carrito)
router.delete('/destroyCarrito',  authMiddleware, productCartController.eliminarCarritoUser)

module.exports = router;