import express from 'express'
import { addNewMate, deleteAllMates, deleteMateById, getMateById, getMates, updateMate } from '../controllers/mates.controller'

const router = express.Router()

router.get('/', getMates)

router.get('/:id', getMateById)

router.post('/', addNewMate)

router.put('/:id', updateMate)

router.delete('/', deleteAllMates)

router.delete('/:id', deleteMateById)

export default router
