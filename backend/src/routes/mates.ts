import express from 'express'
import * as mateServices from '../services/matesServices'
import { toNewMateEntry } from '../utils/newMateEntry'

const router = express.Router()

router.get('/', (_, res) => {
  const mates = mateServices.getMates()
  res.send(mates)
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  const mateById = mateServices.getMateById(id)
  return (mateById != null)
    ? res.send(mateById)
    : res.sendStatus(404)
})

router.post('/', (req, res) => {
  try {
    // const { productName, color, price, description, includeLightbulb, img, type, edition } = req.body
    const newMate = toNewMateEntry(req.body)

    /* const addedMate: MateTypeWithoutId = {
      productName,
      color,
      price,
      description,
      include_lightbulb: includeLightbulb,
      img,
      type,
      edition
    } */

    const response = mateServices.addMate({ newMate })
    res.send(response)
  } catch (error) {
    res.status(400).send(error)
  }
})

export default router
