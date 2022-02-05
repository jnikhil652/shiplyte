const Subscriber=require("../models/subscribeModel")

exports.subscriber=async (req,res)=>{
   
        const subscriber = req.body.subscriber;
        const checkUser = await Subscriber.findOne({ subscriber: subscriber });
    if (checkUser) {
         return res
        .status(400)
        .json({ errors: [{ msg: "Email is already taken" }] });
    }
    try{
        const subscriber=new Subscriber(req.body)
        subscriber.save();
        return res.status(200).json({msg:"subscriber add successfully",subscriber})
    }catch (error) {
        return res.status(400).json({msg:"something went wrong"})
        
    }
}