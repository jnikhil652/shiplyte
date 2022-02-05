const { model, Schema } = require("mongoose");
const seriesSchema = new Schema(
  {
    brandId: {
      type: Schema.Types.ObjectId,
      ref: "brand",
      required: true,
    },
    seriesName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = model("series", seriesSchema);
