import { API_URL, MATES_ENDPOINT } from "@/config/api.config";
import { MatesType } from "../types";

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