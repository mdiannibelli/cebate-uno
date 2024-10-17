import { getBombillas } from "@/services/getBombillas";
import { BombillaType } from "@/types";
import { createContext, useEffect, useState } from "react";

interface BombillasContextType {
    bombillas: BombillaType[]
}

export const BombillasContext = createContext<BombillasContextType | undefined>(undefined);

export default function BombillasProvider({ children }: { children: React.ReactNode }) {
    const [bombillas, setBombillas] = useState<BombillaType[]>([]);

    useEffect(() => {
        async function getInitialBombillas() {
            const bombillasData = await getBombillas();
            const mappedBombillas = bombillasData.map((bombilla: BombillaType) => {
                return {
                    id: bombilla.id,
                    productName: bombilla.productName,
                    material: bombilla.material,
                    img: bombilla.img,
                    length: bombilla.length,
                    price: bombilla.price
                }
            })

            setBombillas(mappedBombillas);
        }

        getInitialBombillas();
    }, []);


    return (
        <BombillasContext.Provider value={{ bombillas }}>
            {children}
        </BombillasContext.Provider>
    )
}
