const mongoose = require("mongoose");
const Schema = mongoose.Schema

const shippoSchema = new Schema({
    name: {
        type: String
    },
    company: {
        type: String
    },
    street1: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    zip: {
        type: String
    },
    country: {
        type: String
    },
    phone: {
        type: String
    },
    email: {
        type: String
    }
})

const Shippo = mongoose.model("shippo", shippoSchema)
module.exports = Shippo