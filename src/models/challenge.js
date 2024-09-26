import mongoose from "mongoose";
const challengueShema = mongoose.Schema({
   category:{
      type:String,
      require:true
   },
   description:{
      type:String,
      require:true
   },
   points:{
      type:Number,
      require:true
   },
   timeOut:{
      type:Number,
      require:true,
      default: 600000
   }
},{
   timestamps: true
})

const Challenge = mongoose.model('challenge', challengueShema)
export default Challenge