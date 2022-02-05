var ObjectId = require("mongodb").ObjectID;
const Brand = require("../models/Brand");
const BrandLogo = require("../models/BrandLogo");
const Quality = require("../models/Quality");

module.exports.addBrand = async (req, res) => {
  const { brandName } = req.body;
  try {
    if (brandName === "") {
      res.status(400).json({ msg: "Brand Name is required" });
    } else {
      const addBrand = await Brand.create({
        brandName,
      });
      res.status(200).json({ msg: "Brand successfully submitted", addBrand });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error.message });
  }
};

module.exports.getBrand = async (req, res) => {
  try {
    const getBrand = await Brand.find({});
    return res.status(200).json(getBrand);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error.message });
  }
};

module.exports.updateBrand = async (req, res) => {
  const { brandName } = req.body;
  try {
    if (brandName === "") {
      res.status(400).json({ msg: "Brand Name is required" });
    } else {
      const updateBrand = await Brand.findByIdAndUpdate(
        { _id: ObjectId(req.params.id) },
        {
          brandName,
        }
      );
      res.status(200).json({ msg: "Brand successfully Updated", updateBrand });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error.message });
  }
};

module.exports.deleteBrand = async (req, res) => {
  try {
    const getBrand = await Brand.findByIdAndRemove({
      _id: ObjectId(req.params.id),
    });
    return res
      .status(200)
      .json({ msg: "Brand successfully deleted", getBrand });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error.message });
  }
};

module.exports.addBrandLogo = async (req, res) => {
  const brandImage = req.file ? req.file.path : null;
  const { name } = req.body;
  try {
    if (name === "") {
      res.status(400).json({ msg: "Name is required" });
    } else {
      const addBrand = await BrandLogo.create({
        name,
        brandImage,
      });
      res
        .status(200)
        .json({ msg: "Brand logo successfully submitted", addBrand });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error.message });
  }
};

module.exports.getBrandLogo = async (req, res) => {
  try {
    const getBrand = await BrandLogo.find({});
    return res.status(200).json(getBrand);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error.message });
  }
};

module.exports.updateBrandLogo = async (req, res) => {
  const { name, currentImage } = req.body;
  const brandImage = req.file ? req.file.path : currentImage;
  try {
    if (name === "") {
      res.status(400).json({ msg: "Name is required" });
    } else {
      const updateBrand = await BrandLogo.findByIdAndUpdate(
        { _id: ObjectId(req.params.id) },
        {
          name,
          brandImage,
        }
      );
      res
        .status(200)
        .json({ msg: "Brand logo successfully Updated", updateBrand });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error.message });
  }
};

module.exports.deleteBrandLogo = async (req, res) => {
  try {
    const getBrand = await BrandLogo.findByIdAndRemove({
      _id: ObjectId(req.params.id),
    });
    return res
      .status(200)
      .json({ msg: "Brand logo successfully deleted", getBrand });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error.message });
  }
};

module.exports.addQuality = async (req, res) => {
  const { quality } = req.body;
  try {
    if (quality === "") {
      res.status(400).json({ msg: "quality is required" });
    } else {
      const addQuality = await Quality.create({
        quality,
      });
      res
        .status(200)
        .json({ msg: "quality successfully submitted", addQuality });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error.message });
  }
};

module.exports.getQuality = async (req, res) => {
  try {
    const getQuality = await Quality.find({});
    return res.status(200).json(getQuality);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error.message });
  }
};

module.exports.updateQuality = async (req, res) => {
  const { quality } = req.body;
  try {
    if (quality === "") {
      res.status(400).json({ msg: "quality is required" });
    } else {
      const updateQuality = await Quality.findByIdAndUpdate(
        { _id: ObjectId(req.params.id) },
        {
          quality,
        }
      );
      res
        .status(200)
        .json({ msg: "Quality successfully Updated", updateQuality });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error.message });
  }
};

module.exports.deleteQuality = async (req, res) => {
  try {
    const getQuality = await Quality.findByIdAndRemove({
      _id: ObjectId(req.params.id),
    });
    return res
      .status(200)
      .json({ msg: "Quality successfully deleted", getQuality });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error.message });
  }
};
