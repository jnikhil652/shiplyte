const ObjectId = require("mongodb").ObjectID;
const Category = require("../models/Category");

module.exports.addCategory = async (req, res) => {
  const { categoryName } = req.body;
  try {
    if (categoryName === "") {
      return res.status(400).json({ msg: "category name is required" });
    } else {
      const addCategory = await Category.create({ categoryName });
      return res.status(200).json({ msg: "Category added succesfully" });
    }
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

module.exports.viewCategory = async (req, res) => {
  try {
    const viewCategory = await Category.find({});
    return res.status(200).json(viewCategory);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

module.exports.updateCategory = async (req, res) => {
  const { categoryName } = req.body;
  try {
    if (categoryName === "") {
      return res.status(400).json({ msg: "category name is required" });
    } else {
      const updateCategory = await Category.findByIdAndUpdate(
        { _id: ObjectId(req.params.id) },
        { categoryName }
      );
      return res.status(200).json({ msg: "Category updated succesfully" });
    }
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

module.exports.deleteCategory = async (req, res) => {
  try {
    const deleteCategory = await Category.findByIdAndRemove({
      _id: ObjectId(req.params.id),
    });
    return res.status(200).json({ msg: "Category deleted succesfully" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
