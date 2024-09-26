import Tree from '../models/tree.js'

export const createTree=async(req, res)=>{
   const data = req.body
      try{
const response = await Tree.create(data)
return res.send('registro exitoso de arbol')
      }catch(error){
console.log(error);
      }
   }
   export const getTree = async(req, res)=>{
      try{
const response = await Tree.find({})
res.send(response)
      }catch(error){
console.log(error);
      }
   }
