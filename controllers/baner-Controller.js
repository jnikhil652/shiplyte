// ADD-BANNER-IMAGE
const BannerImage = require("../models/bannerModel")

// ADD BANNER

var url = "https://lamborghini-12345.herokuapp.com/"
exports.bannerAdd = async (req, res) => {
    try {
        const banner = req.file.path
        var bannerimage = new BannerImage();
        bannerimage.banner = `${url}${banner}`;
        // bannerimage.admin = req.admin._id
        bannerimage.save(function (err) {
            if (err) {
                console.log(err)
                return res.status(500).json({
                    msg: err.msg
                })
            }
            return res.json({
                message: "banner image add Successfully",
                data: bannerimage,
            });
        });
    } catch (error) {
        console.log(error)
        res.json({
            message: "Error find in when adding the banner",
        });
    }
};

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
