// ADD-BANNER-IMAGE
const BannerImage = require("../models/bannerModel")

// ADD BANNER

exports.bannerAdd = async (req, res) => {
    try {
        const images = req.file ? req.file.filename : null;
        const bannerimage = new BannerImage(req.body)
        bannerimage.banner = images
        console.log(images)
        bannerimage.save()
        return res.status(200).json({ msg: "bannerimage add successfully" })
    } catch (error) {
        console.log(error)
        return res.status(400).json({ msg: "something went wrong" })
    }
}

// VIEW BANNER

exports.view = async (req, res) => {
    try {
        const viewBannerImage = await BannerImage.find({});
        return res.status(200).json(viewBannerImage);
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
};

// UPDATE BANNER

exports.updateBannerImage = async (req, res) => {
    const banner = req.file.path;
    try {
        const update = await BannerImage.findByIdAndUpdate(req.params.id, {
            banner,
        });
        return res.status(200).json(update);
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
};

// DELETE BANNER

exports.deleteBannerImage = async (req, res) => {
    try {
        const deleteBannerImage = await BannerImage.deleteOne({ _id: req.params.id });
        return res.status(200).json(deleteBannerImage);
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
};
