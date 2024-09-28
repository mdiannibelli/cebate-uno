import express from 'express'
import * as mateServices from '../services/matesServices'
import { toNewMateEntry } from '../utils/newMateEntry'

const router = express.Router()

router.get('/', (_, res) => {
  const mates = mateServices.getMates()
  res.status(200).send(mates)
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  const mateById = mateServices.getMateById(id)
  return (mateById != null)
    ? res.send(mateById)
    : res.sendStatus(404).send(`Mate with id ${id} not found`)
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
    res.status(201).send(response)
  } catch (error) {
    res.status(400).send(error)
  }
})

router.put('/:id', (req, res) => {
  const { id } = req.params
  try {
    mateServices.updateMate({ newMate: req.body, id })
    res.status(200).send(`Mate ${id} has been updated`)
  } catch (error) {
    res.status(400).send(error)
  }
})

router.delete('/', (_, res) => {
  mateServices.deleteAllMates()
  res.status(204).send('Mates deleted')
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  try {
    mateServices.deleteMateById(id)
    res.status(204).send(`Mate ${id} deleted`)
  } catch (error) {
    res.status(400).send(`Mate ${id} can not be deleted or doesn't found`)
  }
})

export default router
