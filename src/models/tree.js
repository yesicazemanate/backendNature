import mongoose from 'mongoose'

const treeShema= mongoose.Schema({
   idUsuario:{
      type:String,
   },
   status:{
      type:String,
      
   },
   points:{
      type:Number,
   
   },
   
},{
   timestamps: true
})
const Tree = mongoose.model('tree', treeShema)
 export default Tree