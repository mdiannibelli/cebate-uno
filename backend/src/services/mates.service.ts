// Mocks
import matesJson from '../mocks/mates.json'
import { MateType, MateTypeWithoutId } from '../types'
import { toNewMateEntry } from '../utils/create-mate-entry'

let mates: MateType[] = matesJson as MateType[]

export const getMates = (): MateType[] => {
  return [...mates]
}

export const getMateById = (id: string): MateType | undefined => {
  const mateById = mates.find((mate) => mate.id === Number(id))
  // if (!mateById) throw new Error(`Mate ${id} can not found`)
  return mateById
}

export const addMate = ({ newMate }: { newMate: MateTypeWithoutId }): MateType => {
  if (
    newMate.productName == null || newMate.productName.trim() === '' ||
    newMate.price == null || newMate.price.trim() === '' ||
    newMate.type == null || newMate.type.trim() === ''
  ) {
    throw new Error('Invalid mate data')
  }
  const addMate = {
    id: mates.length === 0 ? 1 : Math.max(...mates.map(mate => mate.id)) + 1,
    ...newMate
  }
  mates = ([...mates, addMate])
  return addMate
}

export const deleteAllMates = (): MateType[] => {
  mates = []
  return [...mates]
}

export const deleteMateById = (id: string): MateType[] => {
  const mateToDelete = mates.findIndex(mate => mate.id === Number(id))
  if (mateToDelete === -1) throw new Error('Mate not found!')

  mates = mates.filter((_, index) => index !== mateToDelete)
  return [...mates]
}

export const updateMate = ({ newMate, id }: { newMate: MateTypeWithoutId, id: string }): MateType[] => {
  const mateToUpdate = mates.findIndex(mate => mate.id === Number(id))
  if (mateToUpdate === -1) throw new Error('Mate not found!')

  const newMateUpdated = toNewMateEntry(newMate)
  mates = mates.map((mate, index) => (index === mateToUpdate ? { id: Number(id), ...newMateUpdated } : mate))

  return [...mates]
}
