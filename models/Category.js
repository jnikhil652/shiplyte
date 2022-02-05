const { model, Schema } = require("mongoose");

const categorySchema = new Schema(
  {
    categoryName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("category", categorySchema);
