import Challenge from '../models/challenge.js'
import { sorteo } from '../middleware/sortearReto.js'
export const createChallenge=async(req, res)=>{
   const data = req.body
      try{
const response = Challenge.create(data)
res.status(200).json({msg:'successful registration', response})
      }catch(error){
         console.log(error);
      }
   }

   export const getChallenge=async(req, res)=>{
      try{
   const response=await Challenge.find()
   res.status(200).json({response})
      }catch(error){
   res.status(500).json({msg:'dont found'})
      }
   }
export const ramdonChallenge=async(req, res)=>{
   try{
      const response=await Challenge.find()
      const sorteoChallenge=await sorteo(response)
      res.send(sorteoChallenge)
   }catch(error){
      console.log(error)
   }
}