const { model, Schema } = require("mongoose");

const orderSchema = new Schema(
  {
   
   userId: { type: String,  },

    products: {


      type:[{
        prodectId:{
          type:Schema.Types.ObjectId,
          ref:"product", 
        },
        quntity:Number,
       

      }]
    }
  
  },
  { timestamps: true }
);

module.exports = model("Order", orderSchema);