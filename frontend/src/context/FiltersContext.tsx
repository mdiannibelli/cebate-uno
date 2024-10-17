import { createContext, useEffect, useMemo, useState } from 'react'
import { useMates } from '../hooks/useMates';
import { BombillaType, MatesType } from '../types';
import { useBombillas } from '@/hooks/useBombillas';

export type Filters = {
    query: string,
    color: string,
    edition: string,
    material: string,
    materialLightbulb: string,
    maxPrice: number,
    minPrice: number,
    defaultFilters: {
        allColors: string[],
        allMaterials: string[],
        allEditions: string[],
        allMaterialsLightbulb: string[]
    }
}

type FiltersContextType = {
    filters: Filters
    setFilters: React.Dispatch<React.SetStateAction<Filters>>
    filteredMates: MatesType[]
    filteredBombillas: BombillaType[]
}

export const FiltersContext = createContext<FiltersContextType | undefined>(undefined);

export const FiltersProvider = ({ children }: { children: React.ReactNode }) => {
    const { mates } = useMates();
    const { bombillas } = useBombillas();
    const [filters, setFilters] = useState<Filters>({
        query: '',
        color: 'all',
        edition: 'all',
        material: 'all',
        materialLightbulb: 'all',
        maxPrice: 1000000,
        minPrice: -Infinity,
        defaultFilters: {
            allColors: [],
            allMaterials: [],
            allEditions: [],
            allMaterialsLightbulb: []
        }
    })

    const [delayedQuery, setDelayedQuery] = useState<string>(filters.query);

    useEffect(() => {
        if (!mates.length) return;

        const getAllColors = () => {
            const allColors = mates.map(mate => mate.color)
            const uniqueColors = new Set([...allColors]);
            return [...uniqueColors];
        }

        const getAllEditions = () => {
            const allEdition = mates.map(mate => mate.edition);
            const uniqueEdition = new Set([...allEdition]);
            return [...uniqueEdition];
        }

        const getAllMaterials = () => {
            const allMaterials = mates.map(mate => mate.type);
            const uniqueMaterials = new Set([...allMaterials]);
            return [...uniqueMaterials];
        }

        const getAllMaterialsLightbulb = () => {
            const allMaterialsLightbulb = bombillas.map(bombilla => bombilla.material);
            const uniqueMaterialsLightbulb = new Set([...allMaterialsLightbulb]);
            return [...uniqueMaterialsLightbulb];
        }

        setFilters(prevState => ({
            ...prevState,
            defaultFilters: {
                allColors: getAllColors(),
                allEditions: getAllEditions(),
                allMaterials: getAllMaterials(),
                allMaterialsLightbulb: getAllMaterialsLightbulb()
            }
        }))
    }, [mates])

    useEffect(() => {
        const handleQueryDelayed = setTimeout(() => {
            setDelayedQuery(filters.query);
        }, 1000)

        return () => {
            clearTimeout(handleQueryDelayed);
        }
    }, [filters.query])

    const filteredMates = useMemo(() => {
        return mates.filter((mate) =>
            (filters.color === 'all' || mate.color === filters.color) &&
            (filters.edition === 'all' || mate.edition === filters.edition) &&
            (filters.material === 'all' || mate.type === filters.material) &&
            (Number(mate.price) <= filters.maxPrice && Number(mate.price) >= filters.minPrice) &&
            (mate.productName.toLowerCase().match(delayedQuery.toLowerCase()))
        )
    }, [filters, mates, delayedQuery])

    const filteredBombillas = useMemo(() => {
        return bombillas.filter((bombilla) => (filters.materialLightbulb === 'all' || bombilla.material === filters.materialLightbulb))
    }, [bombillas, filters])

    return (
        <FiltersContext.Provider value={{ filters, setFilters, filteredMates, filteredBombillas }}>
            {children}
        </FiltersContext.Provider>
    )
}
