import { createContext, useEffect, useState } from "react";
import type { MatesType } from "../types";
import { getMates } from "../services/getMates";

interface MatesContextType {
    mates: MatesType[]
}

const MatesContext = createContext<MatesContextType | undefined>(undefined);

export const MatesProvider = ({children}: {children: React.ReactNode}) => {
    const [mates, setMates] = useState<MatesType[]>([]);

    useEffect(() => {
        async function getInitialMates() {
            const matesData = await getMates();
            const mappedMates: MatesType[] = matesData.map((mate) => {
                return {
                    id: mate.id,
                    color: mate.color,
                    description: mate.description,
                    edition: mate.edition,
                    img: mate.img, 
                    include_lightbulb: mate.include_lightbulb, 
                    price: mate.price, 
                    productName: mate.productName,
                    type: mate.type
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
