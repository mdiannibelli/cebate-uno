import { createContext, useEffect, useMemo, useState } from 'react'
import { useMates } from '../hooks/useMates';
import { MatesType } from '../types';

export type Filters = {
    query: string,
    color: string,
    edition: string,
    material: string,
    maxPrice: number,
    minPrice: number,
    defaultFilters: {
        allColors: string[],
        allMaterials: string[],
        allEditions: string[]
    }
}

type FiltersContextType = {
    filters: Filters
    setFilters: React.Dispatch<React.SetStateAction<Filters>>
    filteredMates: MatesType[]
}

export const FiltersContext = createContext<FiltersContextType | undefined>(undefined);

export const FiltersProvider = ({ children }: { children: React.ReactNode }) => {
    const { mates } = useMates();
    const [filters, setFilters] = useState<Filters>({
        query: '',
        color: 'all',
        edition: 'all',
        material: 'all',
        maxPrice: 1000000,
        minPrice: -Infinity,
        defaultFilters: {
            allColors: [],
            allMaterials: [],
            allEditions: []
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

        setFilters(prevState => ({
            ...prevState,
            defaultFilters: {
                allColors: getAllColors(),
                allEditions: getAllEditions(),
                allMaterials: getAllMaterials()
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
    return (
        <FiltersContext.Provider value={{ filters, setFilters, filteredMates }}>
            {children}
        </FiltersContext.Provider>
    )
}
