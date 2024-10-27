const express = require("express");
const { productoUser, productxName } = require("../../controller/User/producto.controller");

const router = express();

router.get('/user/allProducts', productoUser)
router.get('/user/product/:name', productxName)

module.exports = router