export type Type = 'madera' | 'acero' | 'calabaza'
export type Edition = 'personalized' | 'premium' | 'traditional'
export type IncludeLightbulb = 'yes' | 'no'

export interface MateType {
  id: number
  productName: string
  color: string
  price: string
  description: string
  include_lightbulb: IncludeLightbulb
  img: string
  type: Type
  edition: Edition
}

export type MateTypeWithoutId = Omit<MateType, 'id'>
