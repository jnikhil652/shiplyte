const Banner = require("../models/Banner");
var ObjectId = require("mongodb").ObjectID;

module.exports.addBanner = async (req, res) => {
  const bannerVideo = req.file ? req.file.path : null;
  const { heading, description } = req.body;
  try {
    const addBanner = await Banner.create({
      heading,
      description,
      video: bannerVideo,
    });
    return res.status(201).json({ msg: "Banner created successfully" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

module.exports.getBanner = async (req, res) => {
  try {
    const viewBanner = await Banner.find({});
    return res.status(200).json(viewBanner);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

module.exports.editBanner = async (req, res) => {
  const { heading, description, currentBanner } = req.body;
  const bannerVideo = req.file ? req.file.path : currentBanner;
  try {
    const updateBanner = await Banner.findByIdAndUpdate(
      { _id: ObjectId(req.params.id) },
      {
        heading,
        description,
        video: bannerVideo,
      }
    );
    return res.status(201).json({ msg: "Banner updated successfully" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

module.exports.deleteBanner = async (req, res) => {
  try {
    const deleteBanner = await Banner.findByIdAndRemove({
      _id: ObjectId(req.params.id),
    });
    return res.status(200).json({ msg: "Banner deleted successfully" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
