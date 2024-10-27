const {mongoose,Schema} = require('mongoose')

const productosSchema = mongoose.Schema({
    name:{
        type:String,
        requiere: true
    },
    brand:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true
    },
    stock:{
        type:Number,
        require: true
    },
    description:{
        type:String
    },
    image:[{
        type:Buffer 
    }],
    tipo:{ type: Schema.Types.ObjectId , ref: 'TipoProductos',
    required: true }
})
module.exports= mongoose.model('Productos',productosSchema);