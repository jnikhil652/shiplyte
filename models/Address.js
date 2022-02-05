const { model, Schema } = require("mongoose");
const userSchema = new Schema(
  {
     userId: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
   address: {
      type: String,
      required: true,
    },
    apartment: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required:true,
    },
     postalCode: {
      type: Number,
      required: true,
    },
     number: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = model("Address", userSchema);
