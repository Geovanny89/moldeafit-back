const { mongoose, Schema } = require('mongoose');

const productosSchema = mongoose.Schema({
    name: {
        type: String,
        required: true // Corrección aquí
    },
    brand: {
        type: String,
        required: true // Corrección aquí
    },
    price: {
        type: String,
        required: true // Corrección aquí
    },
    sise: [{
        type: String // Este campo permite múltiples tallas
    }],
    color: [{
        type: String // Este campo permite múltiples colores
    }],
    stock: {
        type: Number,
        required: true // Corrección aquí
    },
    description: {
        type: String
    },
    image: [{
        type: Buffer 
    }],
    tipo: { 
        type: Schema.Types.ObjectId, 
        ref: 'TipoProductos',
        required: true 
    }
});

module.exports = mongoose.model('Productos', productosSchema);
