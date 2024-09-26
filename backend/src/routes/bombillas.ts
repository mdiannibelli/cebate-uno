import express from 'express'
import { newBombillaEntry } from '../utils/newBombillaEntry'
import * as lightbulbService from '../services/bombillasServices'

const router = express.Router()

router.get('/', (_, res) => {
  const lightbulbs = lightbulbService.getBombillas()
  res.send(lightbulbs)
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  const lightBulbById = lightbulbService.getBombillaById(id)
  ;(lightBulbById != null)
    ? res.send(lightBulbById)
    : res.sendStatus(400)
})

router.post('/', (req, res) => {
  try {
    const lightBulb = newBombillaEntry(req.body)

    const addedLightbulb = lightbulbService.addLightbulb(lightBulb)
    res.send(addedLightbulb)
  } catch (error) {
    res.status(400).send(error)
  }
})

export default router
