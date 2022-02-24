const mongoose = require("mongoose")
const Schema = mongoose.Schema

const subbrandSchema = new Schema({

},
    {
        timestamps: true
    }
)

const Subbrand = mongoose.model("subbrand", subbrandSchema)
module.exports = Subbrand