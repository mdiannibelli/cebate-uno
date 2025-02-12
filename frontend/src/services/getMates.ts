import { API_URL } from "@/config/api.config";
import { MatesType } from "../types";

export async function getMates(): Promise<MatesType[]> {
  try {
    const response = await fetch(`${API_URL}/api/mates`);
    if (!response.ok) throw new Error(`Error at fetching ${API_URL}/api/mates`)
    const data = await response.json();
    return data
  } catch (error) {
    throw new Error(`Error at fetching ${API_URL}/api/mates`)
  }
}