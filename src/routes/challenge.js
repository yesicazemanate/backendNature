import express from 'express'
import { createChallenge, ramdonChallenge } from '../controller/challenge.controller.js'
const route = express.Router()

route.post('/', createChallenge)
route.get('/',ramdonChallenge )

export default route