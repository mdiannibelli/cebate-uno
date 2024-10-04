import { createContext, useEffect, useState } from "react";
import type { MatesType } from "../types";
import { getMates } from "../services/getMates";

interface MatesContextType {
    mates: MatesType[]
}

export const MatesContext = createContext<MatesContextType | undefined>(undefined);

export const MatesProvider = ({children}: {children: React.ReactNode}) => {
    const [mates, setMates] = useState<MatesType[]>([]);

    useEffect(() => {
        async function getInitialMates() {
            const matesData = await getMates();
            const mappedMates: MatesType[] = matesData.map((mate) => {
                return {
                    id: mate.id,
                    productName: mate.productName,
                    color: mate.color,
                    price: mate.price,
                    description: mate.description,
                    include_lightbulb: mate.include_lightbulb,
                    img: mate.img,
                    type: mate.type,
                    edition: mate.edition
                }
            })

            setMates(mappedMates)
        }

        getInitialMates()
    }, [])

    return (
        <MatesContext.Provider value={{mates}}>
            {children}
        </MatesContext.Provider>
    )
}
