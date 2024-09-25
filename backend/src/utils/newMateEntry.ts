import { IncludeLightbulb, MateType } from '../types'

const validateString = (string: string): boolean => {
  return typeof string === 'string'
}

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

const isLightBulb = (string: string): boolean => {
  return ['yes', 'no'].includes(string)
}

const parseDate = (dateFromRequest: any): string => {
  if (!validateString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('Incorrect or missing date')
  }
  return dateFromRequest
}

const parseText = (textFromRequest: any): string => {
  if (!validateString(textFromRequest)) {
    throw new Error('Incorrect text')
  }
  return textFromRequest
}

const parseLightbulb = (includeLightbulb: any): IncludeLightbulb => {
  if (!validateString(includeLightbulb) || !isLightBulb(includeLightbulb)) {
    throw new Error('Incorrect include lightbulb option')
  }
  return includeLightbulb
}

export const toNewMateEntry = (object: any): MateType => {
  const newEntry: MateType = {
    productName: parseText(object.productName),
    description: parseText(object.productName),
    color: parseText(object.color),
    price: parseText(object.price),
    include_lightbulb: parseLightbulb(object.include_lightbulb)
  }

  return newEntry
}
