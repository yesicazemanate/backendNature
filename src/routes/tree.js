import express from 'express'
import { createTree, getTree } from '../controller/tree.controller.js'
const route= express.Router()
route.post('/', createTree)
route.get('/', getTree)
export default route
