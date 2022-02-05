const { model, Schema } = require("mongoose");

const carSchema = new Schema(
  [{
    brand: {
      type: Schema.Types.ObjectId,
      ref: "brand",
      required: true,
    },
    series: {
      type: Schema.Types.ObjectId,
      ref: "series",
      required: true,
    },
    chassis: {
      type: Schema.Types.ObjectId,
      ref: "chassisNumber",
      required: true,
    },
    model: {
      type: Schema.Types.ObjectId,
      ref: "model",
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
 
],
 { timestamps: true });

module.exports = model("car", carSchema);
