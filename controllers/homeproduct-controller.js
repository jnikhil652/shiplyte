const Homeproduct = require("../models/product-model")

// ADD-HOME-PRODUCT

exports.addhomeproduct = async (req, res) => {
    try {
        const image = req.file.path;
        const product = new Homeproduct(req.body)
        product.productImage = image
        product.save()
        console.log(product)
        return res.status(200).json({ msg: "home product add successfully" })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: "something went wrong" })

    }
}

// GET-HOME-PRODUCT

exports.gethomeproduct = async (req, res) => {
    try {
        const gethomeproduct = await Homeproduct.find({})
        console.log(gethomeproduct)
        return res.status(200).json({ msg: "homepoduct get successfull", gethomeproduct })
    } catch (error) {
        console.log(error)
        return res.status(400).json({ msg: "something went wrong" })
    }
}

// UPDATE-HOME-PRODUCT

exports.updatehomeproduct = async (req, res) => {
    try {
        const productimage = req.file ? req.file.filename : null;
        const { additionalinformation, availaibility, brand, category, color, Content, description, price, productImage, quantity, review, subtitle, title, tags } = req.body;
        const updatehomeproduct = await Homeproduct.findByIdAndUpdate(req.params.id, {
            additionalinformation,
            availaibility,
            brand,
            category,
            color,
            Content,
            description,
            price,
            quantity,
            review,
            subtitle,
            title,
            tags,
            productImage: productimage
        })
        console.log(updatehomeproduct)
        return res.status(200).json({ msg: "homepoduct update successfull", updatehomeproduct })
    } catch (error) {
        console.log(error)
        return res.status(400).json({ msg: "something went wrong", error: error.message })
    }
}

// DELETE-HOME-PRODUCT

exports.deletehomeproduct = async (req, res) => {
    try {
        const deletehomeproduct = await Homeproduct.findByIdAndDelete({ _id: req.params.id })
        console.log(deletehomeproduct)
        return res.status(200).json({ msg: "homepoduct delete successfull", deletehomeproduct })
    } catch (error) {
        console.log(error)
        return res.status(400).json({ msg: "something went wrong" })
    }
}

// DELETE-HOME-PRODUCt-BY-ID

exports.gethomeproductbyid = async (req, res) => {
    try {
        const gethomeproductbyid = await Homeproduct.findById({ _id: req.params.id })
        console.log(gethomeproductbyid)
        return res.status(200).json({ msg: "homepoduct get by id successfull", gethomeproductbyid })
    } catch (error) {
        console.log(error)
        return res.status(400).json({ msg: "something went wrong" })
    }
}