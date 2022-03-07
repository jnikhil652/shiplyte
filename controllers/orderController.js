const Order = require("../models/order");
const Address = require("../models/Address");
const User = require("../models/User");
const Product = require("../models/Product");
const axios = require('axios');

exports.addOrder = (req, res) => {
  const date = new Date().toISOString().slice(0, 10);
  const saveOrder = new Order()
  saveOrder.userId = req.body.userId;
  saveOrder.products = {
    prodectId: req.body.productId,
    quntity: req.body.quntity,
  };
  saveOrder.addressId = req.body.addressId;

  saveOrder.save(async (error, order) => {
    const userData = await User.findById(req.body.userId);
    const productData = await Product.findById(req.body.productId).populate("carBrand").populate("model");
    const addressData = await Address.findById(req.body.addressId);

    axios.put('/order?method=sku', {
      "orders": [
        {
          "orderId": order.id,
          "customerName": userData.firstName + " " + userData.lastName,
          "customerAddress": addressData.address,
          "customerCity": addressData.city,
          "customerPinCode": addressData.postalCode,
          "customerContact": addressData.number,
          "orderType": req.body.orderType,
          "modeType": req.body.mode,
          "orderDate": date,
          "package": {
            "itemLength": 12,
            "itemWidth": 15,
            "itemHeight": 20,
            "itemWeight": 1.5
          },
          "skuList": [
            {
              "sku": productData.id,
              "itemName": productData.carBrand.brandName + " " + productData.model.model,
              "quantity": req.body.quntity,
              "price": productData.sellingPrice,
              "itemWeight": productData.finalWeight, //optional
              "itemLength": 0, //optional
              "itemWidth": 0, //optional
              "itemHeight": 0, //optional
            }
          ],
          "totalValue": productData.sellingPrice,
          "sellerAddressId": req.body.wareHouseId
        }]
    }).then((response) => {
      console.log();
    });
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
      .populate("products")


    return res.status(200).json(viewOrder);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};


exports.viewOrderById = async (req, res) => {
  try {
    const viewOrder = await Order.findById(req.body.orderId)
    return res.status(200).json(viewOrder);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

exports.cancelOrder = async (req, res) => {
  axios.post('/ordercancel', {
    "orders": req.body.orderArray
  }).then((response) => {
    res.send(response);
  }).catch(function (error) {
    res.send(error);
  });
};