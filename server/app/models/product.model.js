const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: String,
    image: String,
    price:String,
    category: {
        id: Number,
        name: String
      },
      brand:String
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', ProductSchema);