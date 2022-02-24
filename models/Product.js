const { model, Schema } = require("mongoose");
const productSchema = new Schema(
  [{
    carBrand: {
      type: Schema.Types.ObjectId,
      ref: "brand",
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "user"
    },
    supplier: {
      type: String,
      required: true,
    },
    partsBrand: {
      type: String,
      required: true,
    },
    quality: {
      type: Schema.Types.ObjectId,
      ref: "quality",
      required: true,
    },
    seriesNumber: {
      type: Schema.Types.ObjectId,
      ref: "series",
      required: true,
    },
    chassisNumber: {
      type: Schema.Types.ObjectId,
      ref: "chassisNumber",
      required: true,
    },
    carVariant: {
      type: String,
      required: true,
    },
    vechileFitment: {
      type: String,
      required: true,
    },
    partsCategory: {
      type: String,
      required: true,
    },
    model: {
      type: Schema.Types.ObjectId,
      ref: "model",
      required: true,
    },
    product: {
      type: String,
      required: true,
    },
    sellingPrice: {
      type: String,
      required: true,
    },
    variationPrice: {
      type: String,
      required: true,
    },
    compatibilityCheck: {
      type: String,
      required: true,
    },
    finalWeight: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      default: "pending"
    },
    image: {
      type: String,
      required: true,
    },
  }
  ],
  { timestamps: true });
module.exports = model("product", productSchema);
