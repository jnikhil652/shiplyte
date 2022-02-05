const { model, Schema } = require("mongoose");
const qualitySchema = new Schema(
  {
    quality: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = model("quality", qualitySchema);
