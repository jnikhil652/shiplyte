const Order = require("../models/order");
const Address = require("../models/Address");
const User = require("../models/User");
const Product = require("../models/Product")

 exports.addOrder = (req, res) => {
     const saveOrder = new Order ()
          saveOrder.userId=req.body.userId;
        saveOrder.products={
          prodectId:req.body.productId,
          quntity:req.body.quntity,
        };
          saveOrder.addressId=req.body.addressId;

     saveOrder.save((error, order) => {
     
      if (error) return res.status(400).json({ error });
       if (order) {
          res.status(201).json({ order });
        }
      });
    }



  exports.getOrder = async (req, res) => {
  try {
    const viewOrder = await Order.find({})
      .populate("userId")
      .populate("addressId")
      .Populate("products")

      
    return res.status(200).json( viewOrder);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};


  exports.viewOrderById = async (req, res) => {
  try {
    const viewOrder = await Order.find({})
    return res.status(200).json( viewOrder);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};