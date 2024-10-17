import { BombillasContext } from '@/context/BombillasContext'
import { useContext } from 'react'

export const useBombillas = () => {
    const bombillasContext = useContext(BombillasContext);
    if (!bombillasContext) throw new Error("Error in bombillas context");
    const { bombillas } = bombillasContext;
    return {
        bombillas: bombillas
    }
}
