const express = require('express')
const productos = require('./Admin/Productos')
const tipoProductos = require('./Admin/TipoProductos')
const allUser = require('./Admin/User')
const UserProducts = require('./User/Products')
const register = require('./Auth/Auth')
const users = require('./User/Users')
const orderUser = require('./User/Order')
const payment = require('./Payment/payment')
const banner = require('./Admin/Banner')
const categories = require('./User/TipeProducts')
const carrito = require('./User/Carrito')



const router = express();

router.use(productos)
router.use(tipoProductos)
router.use(allUser)
router.use(UserProducts)
router.use(register)
router.use(users)
router.use(orderUser)
router.use(payment)
router.use(banner)
router.use(categories)
router.use(carrito)


module.exports = router;