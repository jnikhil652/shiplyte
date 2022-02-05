const { model, Schema } = require("mongoose");
const brandLogoSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    brandImage: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = model("brandLogo", brandLogoSchema);
