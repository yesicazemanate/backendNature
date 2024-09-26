import User from "../models/user.js";
import {encryPassword, comparePassword} from '../utils/bcrypt.js'
import { generateToken,verifyToken } from "../utils/jwt.js";
export const register =async(req, res)=>{
    try{
    const {name, lastname, email, password}= req.body
    const passHash=await encryPassword(password)
    const data={
name,
lastname,
email,
password:passHash
    }
const user= await User.create(data)
res.status(200).send(user)
console.log('user register')
    }catch(error){
        console.log(error)
    }

}
export const login = async(req, res)=>{
    const {email, password}= req.body
    const user = await User.findOne({email})
    if(!user){
       return res.status(404).json({mesage:'use not found'})
    }
    const passHash= await comparePassword(password, user.password)
    if(!passHash){
        return res.status(404).json({mesage:'use not found'})
    }
    const token = generateToken(user)
    res.status(200).json({
        message: 'Login successful',
        token})

}
export const DecodeToken =async(req, res)=>{
    const header = req.headers['authorization'];
    if (!header) {
        return res.status(401).send({ msg: 'No token provided' });
      }
      // separaro el token del beader
      const token = header.split(' ')[1]
    try{
const decodeToken = verifyToken(token)
if (!decodeToken) {
    return res.status(403).send({ msg: 'Invalid token' });
  }
res.send(decodeToken)
    }catch(error){
res.status(500).send({msg:error})
    }
}