import express from 'express'
import { createLightbulb, getAllLightbulbs, getLightbulbById } from '../controllers/bombillas.controller'

const router = express.Router()

router.get('/', getAllLightbulbs)

router.get('/:id', getLightbulbById)

router.post('/', createLightbulb)

export default router
