var ObjectId = require("mongodb").ObjectID;
const Model = require("../models/Model");

module.exports.addModel = async (req, res) => {
  const { model, brandId, seriesId, chassisId } = req.body;
  try {
    if (model === "") {
      res.status(400).json({ msg: "model is required" });
    } else {
      const addModel = await Model.create({
        model,
        brandId,
        seriesId,
        chassisId,
      });
      res.status(200).json({ msg: "model successfully submitted", addModel });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error.message });
  }
};

module.exports.getModel = async (req, res) => {
  try {
    const getModel = await Model.find({});
    return res.status(200).json(getModel);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error.message });
  }
};

module.exports.getModelByChassis = async (req, res) => {
  try {
    const getModelByChassis = await Model.find({
      chassisId: ObjectId(req.params.id),
    });
    return res.status(200).json(getModelByChassis);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error.message });
  }
};

module.exports.updateModel = async (req, res) => {
  const { model, brandId, seriesId, chassisId } = req.body;
  try {
    if (model === "") {
      res.status(400).json({ msg: "model is required" });
    } else {
      const updateModel = await Model.findByIdAndUpdate(
        { _id: ObjectId(req.params.id) },
        {
          model,
          brandId,
          seriesId,
          chassisId,
        }
      );
      res.status(200).json({ msg: "model successfully Updated", updateModel });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error.message });
  }
};

module.exports.deleteModel = async (req, res) => {
  try {
    const getModel = await Model.findByIdAndRemove({
      _id: ObjectId(req.params.id),
    });
    return res.status(200).json({ msg: "Model successfully deleted" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error.message });
  }
};
