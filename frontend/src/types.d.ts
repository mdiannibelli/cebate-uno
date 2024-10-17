import { IncludeLightbulb, MateEdition, MaterialLightbulb } from "./enums"

export interface MatesType {
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

export type SelectorType = 'mates' | 'bombillas'

export interface BombillaType {
  description: string
  id: number
  img: string
  length: string
  material: MaterialLightbulb
  price: string
  productName: string
}