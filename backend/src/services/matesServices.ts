// Mocks
import matesJson from '../mocks/mates.json'
import { MateType, MateTypeWithoutId } from '../types'

export const getMates = (): MateType[] => {
  return matesJson as MateType[]
}

export const getMateById = (id: string): MateType | undefined => {
  const mateById = matesJson.find((mate) => mate.id === Number(id)) as MateType
  // if (!mateById) throw new Error(`Mate ${id} can not found`)
  return mateById
}

export const addMate = ({ newMate }: { newMate: MateTypeWithoutId }): MateType => {
  const addMate = {
    id: Math.max(...matesJson.map(mate => mate.id)) + 1,
    ...newMate
  }
  matesJson.push(addMate)
  return addMate
}
