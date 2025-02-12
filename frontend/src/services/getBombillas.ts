import { API_URL } from "@/config/api.config";

export async function getBombillas() {
    try {
        const response = await fetch(`${API_URL}/api/bombillas`);
        if (!response.ok) throw new Error(`Error at fetching ${API_URL}/api/bombillas`);
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Error at fetching ${API_URL}/api/bombillas`)
    }
}