import { IncludeLightbulb, MateEdition, MaterialLightbulb, TypeofMate } from './enums'

export interface MateType {
  id: number
  productName: string
  color: string
  price: string
  description: string
  include_lightbulb: IncludeLightbulb
  img: string
  type: TypeofMate
  edition: MateEdition
}

export type MateTypeWithoutId = Omit<MateType, 'id'>

export interface LightbulbType {
  id: number
  productName: string
  material: MaterialLightbulb
  length: string
  price: string
  description: string
  img: string
}

export type LightBulbWithoutId = Omit<LightbulbType, 'id'>

export interface TermoType {
  id: number
  productName: string
  capacity: string
  description: string
  material: string
  color: string
  price: string
  img: string
}
