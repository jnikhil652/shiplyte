const mongoose = require("mongoose")
const Schema = mongoose.Schema

const subbrandSchema = new Schema({
    brand: {
        type: Schema.Types.ObjectId,
        ref: "brand"
    },
    name: {
        type: String
    },
    image: {
        type: String
    }
},
    {
        timestamps: true
    }
)

const Subbrand = mongoose.model("subbrand", subbrandSchema)
module.exports = Subbrand