const { model, Schema } = require("mongoose");
const serviceSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
    },
    chasis: {
      type: String,
    },
    series: {
      type: String,
    },
    model: {
      type: String,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = model("service", serviceSchema);
