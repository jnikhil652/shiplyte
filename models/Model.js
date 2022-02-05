const { model, Schema } = require("mongoose");
const modelSchema = new Schema(
  {
    brandId: {
      type: Schema.Types.ObjectId,
      ref: "brand",
      required: true,
    },
    seriesId: {
      type: Schema.Types.ObjectId,
      ref: "series",
      required: true,
    },
    chassisId: {
      type: Schema.Types.ObjectId,
      ref: "chassisNumber",
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = model("model", modelSchema);
