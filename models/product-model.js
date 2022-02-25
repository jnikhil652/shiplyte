const mongoose = require("mongoose");
const Schema = mongoose.Schema

const homeproductSchema = new Schema({
    additionalinformation: {
        type: String
    },
    availaibility: {
        type: String
    },
    brand: {
        type: String
    },
    category: {
        type: String,

    },
    color: {
        type: String
    },
    Content: {
        type: String
    },
    description: {
        type: String
    },
    sellingPrice: {
        type: String
    },
    image: {
        type: String
    },
    quantity: {
        type: String
    },
    review: {
        type: String
    },
    subtitle: {
        type: String
    },
    tags: {
        type: String
    },
    title: {
        type: String
    }
})

const Homeproduct = mongoose.model("homeproduct", homeproductSchema)
module.exports = Homeproduct