const ObjectId = require("mongodb").ObjectID;
const Product = require("../models/Product");
const Car = require("../models/Car");
var fs = require('fs');
const axios = require('axios');

module.exports.addProduct = async (req, res) => {
  const productImage = req.file ? req.file.path : null;
  const {
    carBrand,
    supplier,
    partsBrand,
    quality,
    seriesNumber,
    chassisNumber,
    carVariant,
    vechileFitment,
    partsCategory,
    model,
    product,
    sellingPrice,
    variationPrice,
    compatibilityCheck,
    finalWeight,
    status
  } = req.body;
  try {
    const addProduct = await Product.create({
      user: req.user._id,
      carBrand,
      supplier,
      partsBrand,
      quality,
      seriesNumber,
      chassisNumber,
      carVariant,
      vechileFitment,
      partsCategory,
      model,
      product,
      sellingPrice,
      variationPrice,
      compatibilityCheck,
      finalWeight,
      image: productImage,
      status
    });

    return res.status(200).json({ msg: "Product added succesfully" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

module.exports.viewProduct = async (req, res) => {
  try {
    const viewProduct = await Product.find({})
      .populate("carBrand", "brandName")
      .populate("seriesNumber", "seriesName")
      .populate("chassisNumber", "number")
      .populate("model", "model")
      .populate("quality", "quality")
      .exec();
    return res.status(200).json(viewProduct);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

module.exports.updateProduct = async (req, res) => {
  const {
    carBrand,
    supplier,
    partsBrand,
    quality,
    seriesNumber,
    chassisNumber,
    carVariant,
    vechileFitment,
    partsCategory,
    model,
    product,
    sellingPrice,
    variationPrice,
    compatibilityCheck,
    finalWeight,
    currentImage,
  } = req.body;
  const productImage = req.file ? req.file.path : currentImage;
  try {
    const updateProduct = await Product.findByIdAndUpdate(
      { _id: ObjectId(req.params.id) },
      {
        carBrand,
        supplier,
        partsBrand,
        quality,
        seriesNumber,
        chassisNumber,
        carVariant,
        vechileFitment,
        partsCategory,
        model,
        product,
        sellingPrice,
        variationPrice,
        compatibilityCheck,
        finalWeight,
        image: productImage,
      }
    );
    return res.status(200).json({ msg: "Product updated succesfully" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

module.exports.deleteProduct = async (req, res) => {
  try {
    const deleteProduct = await Product.deleteOne({
      user: req.user._id
    });
    return res.status(200).json({ msg: "Product deleted succesfully" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

exports.getFeaturedProduct = async (req, res) => {
  try {
    const getProduct = await Product.find({})
      .populate("carBrand", "brandName")
      .populate("seriesNumber", "seriesName")
      .populate("chassisNumber", "number")
      .populate("model", "model");

    const getCar = await Car.find({})
      .populate("brand", "brandName")
      .populate("series", "seriesName")
      .populate("chassis", "number")
      .populate("model", "model");

    getProduct.map((product) => {
      getCar.map((car) => {
        if (product.carBrand.brandName == car.brand.brandName) {
          if (product.seriesNumber.seriesName == car.series.seriesName) {
            return res.status(200).json(product)
          }
        }
      });
    });
    // return res.json({msg: 'after getproduct'})
  } catch (error) {
    return res.status(500).json();
  }
};


exports.addFavroite = async (req, res,) => {
  try {
    const product = await Product.findById(req.params.id);


    if (product.status == "pending") {
      product.status = "favroite"

    } else if (product.status == "favroite") {
      product.status = "pending"
    }

    await product.save()

    return res.status(200).json({ msg: `status changed to ${product.status}` });
  } catch (error) {
    // console.log(error);
    return res.status(500).json({ msg: error.message });
  }
};





