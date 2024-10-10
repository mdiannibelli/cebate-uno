import { useContext } from 'react'
import { FiltersContext } from '../context/FiltersContext'

export const useFilters = () => {
    const filtersContext = useContext(FiltersContext);
    if (!filtersContext) throw new Error("Error at Filters Context");

    const { filteredMates, filters, setFilters } = filtersContext;
    return {
        filteredMates,
        filters,
        setFilters
    }
}
