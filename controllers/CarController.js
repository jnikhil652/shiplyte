const ObjectId = require("mongodb").ObjectID;
const Car = require("../models/Car");

module.exports.addCar = async (req, res) => {
  const { brand, series, chassis, model, description } = req.body;
  try {
    const addCar = await Car.create({
      brand,
      series,
      chassis,
      model,
      description,
    });
    return res.status(200).json({ msg: "Car added succesfully" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

module.exports.viewCar = async (req, res) => {
  try {
    const viewCar = await Car.find({})
      .populate("brand", "brandName")
      .populate("series", "seriesName")
      .populate("chassis", "number")
      .populate("model", "model");
    return res.status(200).json(viewCar);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

module.exports.updateCar = async (req, res) => {
  const { brand, series, chassis, model, description } = req.body;
  try {
    const updateCar = await Car.findByIdAndUpdate(
      { _id: ObjectId(req.params.id) },
      { brand, series, chassis, model, description }
    );
    return res.status(200).json({ msg: "Car updated succesfully" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

module.exports.deleteCar = async (req, res) => {
  try {
    const deleteCar = await Car.findByIdAndRemove({
      _id: ObjectId(req.params.id),
    });
    return res.status(200).json({ msg: "Car deleted succesfully" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
