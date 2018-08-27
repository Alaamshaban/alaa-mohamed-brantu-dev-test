const Product = require('../models/product.model.js');

// Create and Save a new product
exports.create = (req, res) => {

    // Create a product
    const product = new Product({

        name: req.body.name || "Untitled product",
        image: req.body.image || "No image provided",
        price: req.body.price || "0",
        category: {
            id: req.body.category.id,
            name: req.body.category.name || "Untitled category",
        },
        brand: req.body.brand,
    });

    // Save product in the database
    product.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the product."
            });
        });
};

// Retrieve and return all products from the database.
exports.findAll = (req, res) => {
    Product.find()
        .then(products => {
            res.send(products);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving products."
            });
        });
};

// Find a single product with a productId
exports.findOne = (req, res) => {
    Product.findById(req.params.productId)
        .then(product => {
            if (!product) {
                return res.status(404).send({
                    message: "product not found with id " + req.params.productId
                });
            }
            res.send(product);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "product not found with id " + req.params.productId
                });
            }
            return res.status(500).send({
                message: "Error retrieving product with id " + req.params.productId
            });
        });
};

// Find a single product with a productName
exports.findOneByName = (req, res) => {
    Product.find({ name:   { $regex:  req.params.name, $options: 'i' }  })
        .then(product => {
            if (!product) {
                return res.status(404).send({
                    message: "product not found with name " + req.params.name
                });
            }
            res.send(product);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "product not found with name " + req.params.name
                });
            }
            return res.status(500).send({
                message: "Error retrieving product with name " + req.params.name
            });
        });
};




