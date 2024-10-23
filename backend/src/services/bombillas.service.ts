import lightbulbsMock from '../mocks/bombillas.json'
import { LightbulbType, LightBulbWithoutId } from '../types'

export function getBombillas (): LightbulbType[] {
  return lightbulbsMock as LightbulbType[]
}

export function getBombillaById (id: string): LightbulbType | undefined {
  const lightbulb = lightbulbsMock.find(lightbulb => lightbulb.id === Number(id)) as LightbulbType
  return lightbulb
}

export function addLightbulb (newEntry: LightBulbWithoutId): LightbulbType {
  const lightbulb = {
    id: Math.max(...lightbulbsMock.map(lightBulb => lightBulb.id)) + 1,
    ...newEntry
  }

  lightbulbsMock.push(lightbulb)
  return lightbulb
}
