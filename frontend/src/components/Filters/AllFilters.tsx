import React from 'react'
import { useFilters } from '../../hooks/useFilters'

export const AllFilters = () => {
    const { filters, filteredMates, setFilters } = useFilters();

    const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            query: e.target.value
        }))
    }
    console.log(filteredMates)
    return (
        <div className='my-8'>
            <div>
                <input type="text" name="query" id="query" placeholder='Buscá tu mate preferido' onChange={handleQuery} value={filters.query} />
            </div>
        </div>
    )
}
