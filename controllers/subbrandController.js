const Subbrand = require("../models/subBrand")


exports.addsubbrand = async (req, res) => {
    try {
        const images = req.file ? req.file.filename : null;
        const subbrand = new Subbrand(req.body)
        subbrand.image = images
        console.log(images)
        subbrand.save()
        return res.status(200).json({ msg: "subbrand add successfully" })
    } catch (error) {
        console.log(error)
        return res.status(400).json({ msg: "something went wrong" })
    }
}


exports.getsubbrand = async (req, res) => {
    try {
        const getsubbrand = await Subbrand.find({})
        console.log(getsubbrand)
        return res.status(200).json({ msg: "getsubbrand successfully", getsubbrand })
    } catch (error) {
        console.log(error)
        return res.status(400).json({ msg: "something went wrong" })
    }
}


exports.updatesubbrand = async (req, res) => {
    try {
        const name = req.body.name;
        const images = req.file ? req.file.filename : null;
        const updatesubbrand = await Subbrand.findByIdAndUpdate(req.params.id, {
            name,
            image: images
        })
        console.log(updatesubbrand)
        return res.status(200).json({ msg: "update successfully" })
    } catch (error) {
        console.log(error)
        return res.status(400).json({ msg: "something went wrong" })
    }
}

exports.deletesubbrand = async (req, res) => {
    try {
        const deletesubbrand = await Subbrand.findByIdAndDelete({ _id: req.params.id })
        console.log(deletesubbrand)
        return res.status(200).json({ msg: "delete subbrand successfully" })
    } catch (error) {
        console.log(error)
        return res.status(400).json({ msg: "something went wrong" })
    }
}