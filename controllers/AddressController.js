const User = require("../models/User");
const shippingAddress = require("../models/Address");
var ObjectId = require("mongodb").ObjectID;



exports.addAddress = (req, res) => {
  //return res.status(200).json({body: req.body})

  const { firstName, lastName, address, apartment, city, country, postalCode, number
  } = req.body
  const saveAddress = new shippingAddress({
    userId: req.user,
    firstName,
    lastName,
    address,
    apartment,
    city,
    country,
    postalCode,
    number
  })


  saveAddress.save((err, data) => {
    if (err) {
      return res.status(400).json({
        message: "Something Went Wrong"
      })
    }

    if (data) {
      res.status(200).json({
        message: "Address Add Successfully..!"
        // data
      })
    }
  })
}


exports.getAddress = async (req, res) => {
  shippingAddress.find({}).exec((err, data) => {
    if (err)
      return res.status(400).json({ err });
    if (data) {
      return res.status(200).json({
        data
      })
    }
  })
};


exports.updateAddress = async (req, res) => {
  const { firstName, lastName, address, apartment, city, country, postalCode, number
  } = req.body
  try {
    const updateAddress = await shippingAddress.findByIdAndUpdate(
      {
        _id: ObjectId(req.params.id),
      },
      {
        firstName,
        lastName,
        address,
        apartment,
        city,
        country,
        postalCode,
        number
      }
    );
    res.status(200).json({ msg: "User successfully updated", updateAddress });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

exports.deleteAddress = async (req, res) => {
  try {
    const deleteAddress = await shippingAddress.findByIdAndRemove({
      _id: ObjectId(req.params.id)
    });
    return res.status(200).json({ msg: "Address deleted successfully" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

