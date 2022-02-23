const mongoose = require("mongoose")
const Schema = mongoose.Schema

const exhaustSchema = new Schema({
    sound: {
        type: String
    },
    audio1: {
        type: String
    },
    audio2: {
        type: String
    }
},
    {
        timestamps: true
    }
)

const Exhaust = mongoose.model("exhaust", exhaustSchema)
module.exports = Exhaust