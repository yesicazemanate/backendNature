import express from 'express'
import { CalcularHuella, getFootprint } from '../controller/footPrint.controller.js'
const route= express.Router()

route.post('/calcular', CalcularHuella)
route.get('/obtenerhuella/:id', getFootprint)

export default route
