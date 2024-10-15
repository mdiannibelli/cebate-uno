import React from 'react'
import { useFilters } from '../../hooks/useFilters'
import { DropdownColorFilter } from './DropdownColorFilter';
import { DropdownMaterialFilter } from './DropdownMaterialFilter';
import { DropdownEditionFilter } from './DropdownEditionFilter';

export const AllFilters = () => {
    const { filters, setFilters } = useFilters();

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
        <>
            <div className='my-4 flex gap-x-4'>
                <DropdownColorFilter title='color' setFilters={setFilters} colors={filters.defaultFilters.allColors} />
                <DropdownMaterialFilter title='material' setFilters={setFilters} materials={filters.defaultFilters.allMaterials} />
                <DropdownEditionFilter title='edición' setFilters={setFilters} editions={filters.defaultFilters.allEditions} />
            </div>
            <div className='my-8 w-full flex-col md:flex-row gap-8 flex max-w-[1164px] mx-auto gap-x-12 px-4 md:px-8 lg:px-32 xl:px-0'>
                <div className='flex gap-2'>
                    <div className='flex items-center gap-2'>
                        <label htmlFor="price" className='text-xs md:text-base'>Precio:</label>

                        <input
                            className='py-2 px-1 w-16 md:w-24 rounded bg-neutral-100 select-none outline-none text-xs md:text-base'
                            type="number"
                            name="minPrice"
                            placeholder='Mínimo'
                            value={filters.minPrice === 0 ? '' : filters.minPrice}
                            onChange={handlePrice} />
                        <span>-</span>
                        <input
                            className='py-2 px-1 w-16 md:w-24 rounded bg-neutral-100 select-none outline-none text-xs md:text-base'
                            type="number"
                            name="maxPrice"
                            placeholder='Máximo'
                            value={filters.maxPrice}
                            onChange={handlePrice} />
                    </div>
                    <div className='mx-auto my-2'>
                        <button
                            onClick={resetFilters}
                            className='bg-neutral-800 rounded hover:bg-neutral-600 duration-300 text-white py-1 px-2 text-xs lg:text-sm'>Borrar filtros</button>
                    </div>
                </div>
                <div className='flex justify-start flex-1 mx-1'>
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
        </>
    )
}
