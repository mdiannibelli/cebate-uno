import { MateTypeWithoutId } from '../types'
import { IncludeLightbulb, MateEdition, TypeofMate } from '../enums'

const validateString = (string: string): boolean => {
  return typeof string === 'string'
}

/* const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
} */

const isLightBulb = (string: any): boolean => {
  return Object.values(IncludeLightbulb).includes(string)
}

const isEdition = (string: any): boolean => {
  return Object.values(MateEdition).includes(string)
}

const isType = (string: any): boolean => {
  return Object.values(TypeofMate).includes(string)
}

const isAcloudinaryImg = (string: string): boolean => {
  return ['cloudinary'].includes(string)
}

/* const parseDate = (dateFromRequest: any): string => {
  if (!validateString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('Incorrect or missing date')
  }
  return dateFromRequest
} */

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

const parseEdition = (edition: any): MateEdition => {
  if (!validateString(edition) || !isEdition(edition)) {
    throw new Error('Incorrect edition')
  }

  return edition
}

const parseType = (mateType: any): TypeofMate => {
  if (!validateString(mateType) || !isType(mateType)) {
    throw new Error('Type must be calabaza, acero or madera')
  }

  return mateType
}

const parseImg = (img: any): string => {
  if (!validateString(img) || !isAcloudinaryImg(img)) {
    throw new Error('Image should be uploaded form cloudinary')
  }

  return img
}

export const toNewMateEntry = (object: any): MateTypeWithoutId => {
  const newEntry: MateTypeWithoutId = {
    productName: parseText(object.productName),
    description: parseText(object.productName),
    color: parseText(object.color),
    price: parseText(object.price),
    include_lightbulb: parseLightbulb(object.include_lightbulb),
    edition: parseEdition(object.edition),
    type: parseType(object.type),
    img: parseImg(object.img)
  }

  return newEntry
}
