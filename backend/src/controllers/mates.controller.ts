import { Request, Response } from 'express'
import * as mateServices from '../services/mates.service'
import { toNewMateEntry } from '../utils/newMateEntry'

export const getMates = (_: Request, res: Response): void => {
  const mates = mateServices.getMates()
  res.status(200).send(mates)
}

export const getMateById = (req: Request, res: Response): Response<any, Record<string, any>> => {
  const { id } = req.params
  const mateById = mateServices.getMateById(id)
  return (mateById != null)
    ? res.send(mateById)
    : res.sendStatus(404).send(`Mate with id ${id} not found`)
}

export const addNewMate = (req: Request, res: Response): void => {
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
}

export const updateMate = (req: Request, res: Response): void => {
  const { id } = req.params
  try {
    mateServices.updateMate({ newMate: req.body, id })
    res.status(200).send(`Mate ${id} has been updated`)
  } catch (error) {
    res.status(400).send(error)
  }
}

export const deleteAllMates = (_: Request, res: Response): void => {
  mateServices.deleteAllMates()
  res.status(204).send('Mates deleted')
}

export const deleteMateById = (req: Request, res: Response): void => {
  const { id } = req.params
  try {
    mateServices.deleteMateById(id)
    res.status(204).send(`Mate ${id} deleted`)
  } catch (error) {
    res.status(400).send(`Mate ${id} can not be deleted or doesn't found`)
  }
}
