import { LightBulbWithoutId, MaterialLightbulb } from '../types'

const validateString = (string: any): boolean => {
  return typeof string === 'string'
}

const materialType = (material: any): boolean => {
  return ['acero', 'alpaca', 'bronce', 'plata'].includes(material)
}

const validateLength = (length: any): boolean => {
  return length.includes('cm')
}

const validateImg = (img: string): boolean => {
  return 'cloudinary'.includes(img)
}

const isText = (text: any): string => {
  if (!validateString(text)) {
    throw new Error('Must be a string')
  }
  return text
}

const isMaterial = (material: any): MaterialLightbulb => {
  if (!validateString(material) || !materialType(material)) {
    throw new Error('Material must be acero, alpaca, bronce or plata')
  }
  return material
}

const isLength = (length: any): string => {
  if (!validateString(length) || !validateLength(length)) {
    throw new Error('Length must be a string and include the word length')
  }
  return length
}

const isImage = (img: any): string => {
  if (!validateString(img) || !validateImg(img)) {
    throw new Error('Image must be uploaded from cloudinary')
  }
  return img
}

export function newBombillaEntry (object: any): LightBulbWithoutId {
  const lightBulb = {
    productName: isText(object.productName),
    material: isMaterial(object.material),
    length: isLength(object.length),
    price: isText(object.price),
    description: isText(object.productName),
    img: isImage(object.img)
  }

  return lightBulb
}
