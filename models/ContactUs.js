const { model, Schema } = require("mongoose");
const contactUsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    vehicalDetails: {
      type: String,
    },
  },
  { timestamps: true }
);
module.exports = model("contactus", contactUsSchema);
