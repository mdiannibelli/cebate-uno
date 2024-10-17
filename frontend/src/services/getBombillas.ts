import { BOMBILLAS_ENDPOINT } from "@/config/api.config";

export async function getBombillas() {
    try {
        const response = await fetch(BOMBILLAS_ENDPOINT);
        if (!response.ok) throw new Error(`Error at fetching ${BOMBILLAS_ENDPOINT}`);
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Error at fetching ${BOMBILLAS_ENDPOINT}`);
    }
}