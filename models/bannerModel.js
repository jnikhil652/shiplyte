const mongoose = require("mongoose")
const Schema = mongoose.Schema

const bannerimageSchema = new Schema({
    admin: {
        type: Schema.Types.ObjectId,
        ref: "admin"
    },
    banner: {
        type: String
    },
},
    {
        timestamps: true
    }
)

const BannerImage = mongoose.model("bannerimage", bannerimageSchema)
module.exports = BannerImage