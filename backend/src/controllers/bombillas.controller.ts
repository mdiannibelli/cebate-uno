import { Request, Response } from 'express'
import * as lightbulbService from '../services/bombillas.service'
import { newBombillaEntry } from '../utils/newBombillaEntry'

export const getAllLightbulbs = (_: Request, res: Response): void => {
  const lightbulbs = lightbulbService.getBombillas()
  res.send(lightbulbs)
}

export const getLightbulbById = (req: Request, res: Response): void => {
  const { id } = req.params
  const lightBulbById = lightbulbService.getBombillaById(id)
  if (lightBulbById != null) {
    res.send(lightBulbById)
  } else {
    res.sendStatus(400)
  }
}

export const createLightbulb = (req: Request, res: Response): void => {
  try {
    const lightBulb = newBombillaEntry(req.body)

    const addedLightbulb = lightbulbService.addLightbulb(lightBulb)
    res.send(addedLightbulb)
  } catch (error) {
    res.status(400).send(error)
  }
}
