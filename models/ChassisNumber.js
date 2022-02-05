const { model, Schema } = require("mongoose");
const chassisNumberSchema = new Schema(
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
    number: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = model("chassisNumber", chassisNumberSchema);
