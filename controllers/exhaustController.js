const Exhaust = require("../models/exaushd")

// ADD--EXHAUST

exports.addexhaust = async (req, res) => {
    try {
        const exhaust = new Exhaust(req.body)
        exhaust.audio1 = req.files['audio1'][0].filename
        exhaust.audio2 = req.files['audio2'][0].filename
        exhaust.save()
        return res.status(200).json({ msg: "exhaust added" })
    } catch (error) {
        console.log(error)
        return res.status(400).json({ msg: "something went wrong" })

    }
}

// GET---EXHAUST

exports.getexaust = async (req, res) => {
    try {
        const getexhaust = await Exhaust.find({})
        return res.status(200).json({ msg: "exhaust getted", getexhaust })

    } catch (error) {
        return res.status(400).json({ msg: "something went wrong" })

    }
}

// DELETE--EXHAUSHED

exports.deleteexhaust = async (req, res) => {
    try {
        const deleteexhaust = await Exhaust.deleteOne({})
        return res.status(200).json({ msg: "exhaust deleted", deleteexhaust })

    } catch (error) {
        return res.status(400).json({ msg: "something went wrong" })

    }
}