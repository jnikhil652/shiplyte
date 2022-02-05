const { model, Schema } = require("mongoose");
const bannerSchema = new Schema(
  {
    heading: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    video: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = model("banner", bannerSchema);
