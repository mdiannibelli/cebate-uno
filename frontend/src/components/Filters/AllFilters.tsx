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

    const handlePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;
        setFilters(prevFilters => ({
            ...prevFilters,
            [name]: Number(value)
        }))
    }

    const resetFilters = () => {
        setFilters(prevFilters => ({
            ...prevFilters,
            minPrice: 0,
            maxPrice: 100000
        }))
    }
    return (
        <div className='my-8 w-full flex max-w-[1164px] mx-auto gap-x-12'>
            <div className='flex gap-2'>
                <div className='flex items-center gap-2'>
                    <label htmlFor="price">Precio:</label>

                    <input
                        className='py-2 px-1 w-24 rounded bg-neutral-100 select-none outline-none'
                        type="number"
                        name="minPrice"
                        placeholder='Mínimo'
                        value={filters.minPrice === 0 ? '' : filters.minPrice}
                        onChange={handlePrice} />
                    <span>-</span>
                    <input
                        className='py-2 px-1 w-24 rounded bg-neutral-100 select-none outline-none'
                        type="number"
                        name="maxPrice"
                        placeholder='Máximo'
                        value={filters.maxPrice}
                        onChange={handlePrice} />
                </div>
                <div className='mx-auto my-2'>
                    <button
                        onClick={resetFilters}
                        className='bg-neutral-800 rounded hover:bg-neutral-600 duration-300 text-white py-1 px-2 text-sm'>Borrar filtros</button>
                </div>
            </div>
            <div className='flex justify-start flex-1'>
                <input
                    className='py-3 px-4 rounded bg-neutral-100 h-12 select-none outline-none w-[320px] '
                    type="text"
                    name="query"
                    id="query"
                    placeholder='Buscá tu mate preferido'
                    onChange={handleQuery}
                    value={filters.query} />
            </div>

        </div>
    )
}
