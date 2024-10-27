const Productos = require("../../models/Productos")

const productoUser = async(req,res)=>{
    try {
        const allProducts = await Productos.find().populate('tipo');
        if(!allProducts){
            res.status(404).send("NO existen productos para mostrar")
            return
        }
        res.status(200).send(allProducts)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}
const productxName = async(req,res)=>{
    try {
        const {name}= req.params
        const product = await Productos.find({ name: { $regex: new RegExp(name, 'i') }});
        
        if(!product){
            res.status(400).send("No existe producto con ese nombre") 
            return
        }
        res.status(200).send(product)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message })
    }
}
module.exports ={
    productoUser,
    productxName
}
