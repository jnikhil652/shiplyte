const mongoose=require("mongoose")
const Schema=mongoose.Schema

const subscriberSchema= new Schema({
    subscriber:{
        type:String
    }
},{
    timestamps:true
})

const Subscriber=mongoose.model("subscriber",subscriberSchema)
module.exports=Subscriber