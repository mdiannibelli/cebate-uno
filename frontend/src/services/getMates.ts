import { MatesType } from "../types";

const API_URL = import.meta.env.VITE_SERVER_API ?? 'http://localhost:3000'
const MATES_ENDPOINT = `${API_URL}/api/mates`

export async function getMates(): Promise<MatesType[]> {
  try {
    const response = await fetch(MATES_ENDPOINT);
    if (!response.ok) throw new Error(`Error at fetching ${API_URL}`);
    const data = await response.json();
    return data
  } catch (error) {
    throw new Error(`Error at fetching ${API_URL}`)
  }
}